import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer(){
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>{t('footer.aboutTitle')}</h4>
          <ul>
            <li><Link to="/about">{t('footer.links.about')}</Link></li>
            <li><Link to="/opening-hours">{t('footer.links.openingHours')}</Link></li>
            <li><Link to="/directions">{t('footer.links.directions')}</Link></li>
            <li><Link to="/contact">{t('footer.links.contact')}</Link></li>
            <li><Link to="/sitemap">{t('footer.links.sitemap')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.legalTitle')}</h4>
          <ul>
            <li><Link to="/impressum">{t('footer.legalLinks.impressum')}</Link></li>
            <li><Link to="/privacy">{t('footer.legalLinks.privacy')}</Link></li>
            <li><Link to="/terms">{t('footer.legalLinks.terms')}</Link></li>
            <li><Link to="/payment">{t('footer.legalLinks.payment')}</Link></li>
            <li><Link to="/shipping">{t('footer.legalLinks.shipping')}</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4 className="contact-title">{t('contact.name')}</h4>
          <div className="contact-info">
            <div>{t('contact.street')}</div>
            <div>{t('contact.zipcity')}</div>
            <div><a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a></div>
            <div><a href={`tel:${t('contact.phoneRaw')}`}>{t('contact.phone')}</a></div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>{t('footer.copyright', { year: new Date().getFullYear() })}</small>
      </div>
    </footer>
  )
}
