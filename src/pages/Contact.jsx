import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(null)
  const btnRef = useRef(null)
  const [btnWidth, setBtnWidth] = useState(null)
  const [attachments, setAttachments] = useState([])
  const [readingFiles, setReadingFiles] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // small timeout to wait for layout/paint in SPA navigation
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      }
    }
  }, [location])

  // Auto-hide success message after a short delay
  useEffect(() => {
    if (sent === 'ok') {
      const timer = setTimeout(() => setSent(null), 3000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [sent])

  useLayoutEffect(() => {
    const measure = () => {
      if (btnRef.current && typeof btnRef.current.offsetWidth === 'number') {
        setBtnWidth(btnRef.current.offsetWidth)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Read dropped/selected files as base64 and store in attachments
  const readFileAsBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result || ''
      // result is like 'data:<type>;base64,<base64data>' for readAsDataURL
      if (typeof result === 'string') {
        const comma = result.indexOf(',')
        const base64 = comma >= 0 ? result.slice(comma + 1) : result
        resolve(base64)
      } else {
        // fallback: convert ArrayBuffer
        const arr = new Uint8Array(result)
        let binary = ''
        for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i])
        resolve(btoa(binary))
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  const handleFiles = async (fileList) => {
    if (!fileList || fileList.length === 0) return
    setReadingFiles(true)
    const files = Array.from(fileList)
    const readPromises = files.map(async (f) => {
      const base64 = await readFileAsBase64(f)
      return { filename: f.name, content: base64, contentType: f.type }
    })
    try {
      const newFiles = await Promise.all(readPromises)
      setAttachments(prev => [...prev, ...newFiles])
    } catch (err) {
      console.error('Failed reading files', err)
    } finally {
      setReadingFiles(false)
    }
  }

  return (
    <main className="container contact-page">
      <h2>{t('contactPage.title')}</h2>
      <div className="contact-grid" style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:24,alignItems:'start'}}>
        <div>
          <p>{t('contact.name')}</p>
          <p>{t('contact.street')}<br/>{t('contact.zipcity')}</p>
          <p><a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a></p>
          <p>{t('contactCta')}: <a href={`tel:${t('contact.phoneRaw')}`}>{t('contact.phone')}</a></p>
          <h3>{t('contactPage.inquiryTitle')}</h3>
          <form className="contact-form" onSubmit={async (e) => {
            e.preventDefault()
            setSent('sending')
            try {
              const payload = { name, email, message }
              if (attachments && attachments.length) payload.attachments = attachments.map(a => ({ filename: a.filename, content: a.content, contentType: a.contentType }))

              const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              })

              // Be defensive: some error responses (proxies, servers) may return
              // non-JSON bodies which would make `res.json()` throw a SyntaxError.
              let json = null
              const txt = await res.text()
              try {
                json = txt ? JSON.parse(txt) : null
              } catch (parseErr) {
                console.warn('Non-JSON response from /api/send-email:', txt)
              }

              if (res.ok && json && json.ok) {
                setSent('ok')
                setName('')
                setEmail('')
                setMessage('')
              } else {
                setSent('error')
                console.warn('Send failed', { status: res.status, body: json || txt })
              }
            } catch (err) {
              console.error(err)
              setSent('error')
            }
          }}>
            <label>{t('contactPage.form.name')}<input value={name} onChange={e => setName(e.target.value)} required /></label>
            <label>{t('contactPage.form.email')}<input value={email} onChange={e => setEmail(e.target.value)} type="email" required /></label>
            <label>{t('contactPage.form.message')}<textarea value={message} onChange={e => setMessage(e.target.value)} required /></label>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
              <div
                onDrop={async (ev) => {
                  ev.preventDefault();
                  if (!ev.dataTransfer) return
                  await handleFiles(ev.dataTransfer.files)
                }}
                onDragOver={(ev) => ev.preventDefault()}
                style={{width:'100%',padding:12,border:'2px dashed #ddd',borderRadius:6,textAlign:'center',background:'#fafafa'}}
              >
                Ziehe Dateien hierher (PDF, JPG, PNG) oder <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()} style={{border:'none',background:'transparent',color:'#007bff',cursor:'pointer'}}>durchsuchen</button>
                <input ref={fileInputRef} type="file" multiple style={{display:'none'}} onChange={e => handleFiles(e.target.files)} />
              </div>
              {attachments.length > 0 && (
                <ul style={{listStyle:'none',padding:8,margin:0,width:btnWidth || undefined}}>
                  {attachments.map((f, i) => (
                    <li key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 8px',background:'#fff',borderRadius:4,marginTop:6,border:'1px solid #eee'}}>
                      <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:360}}>{f.filename}</span>
                      <button type="button" onClick={() => setAttachments(prev => prev.filter((_, idx) => idx !== i))} style={{marginLeft:8}}>Entfernen</button>
                    </li>
                  ))}
                </ul>
              )}
              <button ref={btnRef} type="submit" disabled={sent === 'sending' || readingFiles}>{sent === 'sending' ? 'Sende...' : t('contactPage.form.submit')}</button>
            </div>
          </form>
          {sent === 'ok' && (
            <div
              role="status"
              aria-live="polite"
              style={{
                marginTop: 12,
                padding: 12,
                background: '#e6ffed',
                border: '1px solid #c7f0d1',
                borderRadius: 6,
                display: 'inline-block',
                width: btnWidth || undefined
              }}
            >
              Vielen Dank — Ihre Nachricht wurde versendet.
            </div>
          )}
          {sent === 'error' && (
            <div role="status" aria-live="polite" style={{marginTop:12,padding:12,background:'#fff3f3',border:'1px solid #f2c2c2',borderRadius:6}}>
              Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später oder schreiben Sie direkt an {t('contact.email')}.
            </div>
          )}
        </div>
        <aside>
          <div id="opening-hours" style={{padding:18,background:'var(--muted)',borderRadius:8}}>
            <strong>{t('contactPage.openingHoursTitle')}</strong>
            <p style={{whiteSpace:'pre-line'}}>{t('contactPage.openingHoursText')}</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
