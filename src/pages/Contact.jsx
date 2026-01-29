import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()
  const location = useLocation()

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
          <form className="contact-form">
            <label>{t('contactPage.form.name')}<input/></label>
            <label>{t('contactPage.form.email')}<input/></label>
            <label>{t('contactPage.form.message')}<textarea/></label>
            <button type="submit">{t('contactPage.form.submit')}</button>
          </form>
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
