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
              const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
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
            <button ref={btnRef} type="submit" disabled={sent === 'sending'}>{sent === 'sending' ? 'Sende...' : t('contactPage.form.submit')}</button>
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
