import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Contact(){
  const { t } = useTranslation()
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(null)
  const btnRef = useRef(null)
  const [btnWidth, setBtnWidth] = useState(null)
  const messageRef = useRef(null)
  const [controlWidth, setControlWidth] = useState(null)
  // attachments will hold File objects
  const [attachments, setAttachments] = useState([])
  const [readingFiles, setReadingFiles] = useState(false)
  const fileInputRef = useRef(null)
  const [fileError, setFileError] = useState(null)
  const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB per file

  useEffect(() => {
    const main = document.getElementById('content')
    if (!main) return undefined
    main.setAttribute('data-bg-wappen', 'true')
    main.style.setProperty('--wappen-rotate', '-45deg')
    main.style.setProperty('--wappen-size', '64vw')
    main.style.setProperty('--wappen-pos-x', '35%')
    return () => {
      main.removeAttribute('data-bg-wappen')
      main.style.removeProperty('--wappen-rotate')
      main.style.removeProperty('--wappen-size')
      main.style.removeProperty('--wappen-pos-x')
    }
  }, [])

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
      // prefer measuring the message textarea width for consistent layout
      const el = messageRef.current || btnRef.current
      if (el && typeof el.offsetWidth === 'number') setControlWidth(el.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Handle dropped/selected File objects and store them directly.
  const handleFiles = async (fileList) => {
    if (!fileList || fileList.length === 0) return
    setReadingFiles(true)
    const files = Array.from(fileList)
    const oversized = files.filter(f => f.size > MAX_FILE_SIZE)
    if (oversized.length) {
      setFileError(t('contactPage.fileTooLarge', { filename: oversized[0].name, max: Math.round(MAX_FILE_SIZE/1024/1024) }))
      setReadingFiles(false)
      return
    }
    setFileError(null)

    // store raw File objects for multipart upload
    setAttachments(prev => [...prev, ...files])
    setReadingFiles(false)
  }

  return (
    <PageContainer withViewport pageClass="contact-page relative-z1">
        <h2>{t('contactPage.title')}</h2>
        <div className="contact-grid">
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
              let res
              // If we have File objects, send multipart/form-data so files are uploaded directly
              if (attachments && attachments.length && attachments[0] instanceof File) {
                const fd = new FormData()
                fd.append('name', name)
                fd.append('email', email)
                fd.append('message', message)
                attachments.forEach((f) => fd.append('attachments[]', f, f.name))
                res = await fetch('/api/send-email/index.php', { method: 'POST', body: fd })
              } else {
                const payload = { name, email, message }
                if (attachments && attachments.length) payload.attachments = attachments.map(a => ({ filename: a.filename || a.name, content: a.content, contentType: a.contentType || a.type }))
                res = await fetch('/api/send-email/index.php', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload)
                })
              }

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
                setAttachments([])
                if (fileInputRef.current) fileInputRef.current.value = ''
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
            <label>{t('contactPage.form.message')}<textarea ref={messageRef} value={message} onChange={e => setMessage(e.target.value)} required /></label>
            <div className="center-column">
              <button ref={btnRef} className="submit-btn" type="submit" disabled={sent === 'sending' || readingFiles}>{sent === 'sending' ? t('contactPage.sending') : t('contactPage.form.submit')}</button>

              <div
                onDrop={async (ev) => {
                  ev.preventDefault();
                  if (!ev.dataTransfer) return
                  await handleFiles(ev.dataTransfer.files)
                }}
                onDragOver={(ev) => ev.preventDefault()}
                className="file-drop mt-8"
              >
                {t('contactPage.uploadPrompt', { types: 'PDF, JPG, PNG' })} {t('contactPage.or')} <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()} className="link-button">{t('contactPage.browse')}</button>
                <input ref={fileInputRef} type="file" multiple className="hidden-input" onChange={e => handleFiles(e.target.files)} />
              </div>

              {fileError && <div className="error-msg">{fileError}</div>}

              {attachments.length > 0 && (
                <ul className="file-list">
                  {attachments.map((f, i) => (
                    <li key={i} className="file-list-item">
                      <span className="ellipsis">{(f && (f.name || f.filename)) || 'attachment'}</span>
                      <button type="button" onClick={() => setAttachments(prev => prev.filter((_, idx) => idx !== i))} className="ml-8">{t('contactPage.remove')}</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
          {sent === 'ok' && (
            <div role="status" aria-live="polite" className="status-msg status-ok" style={{ width: controlWidth || undefined }}>
              {t('contactPage.sentOk')}
            </div>
          )}
          {sent === 'error' && (
            <div role="status" aria-live="polite" className="status-msg status-err">
              {t('contactPage.sentError', { email: t('contact.email') })}
            </div>
          )}
        </div>
        <aside>
          <div id="opening-hours" className="opening-hours">
            <strong>{t('contactPage.openingHoursTitle')}</strong>
            <p className="pre-line">{t('contactPage.openingHoursText')}</p>
          </div>
        </aside>
        </div>
      </PageContainer>
  )
}
