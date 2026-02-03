import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// Use the site monogram from the public icons folder

export default function Header(){
  const { t, i18n } = useTranslation()
  const switchLang = (lng) => i18n.changeLanguage(lng)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (!open) return
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const toggle = () => setOpen(o => !o)

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="brand-link">
            <img src="/assets/icons/wappen-outline.png" alt="SK" className="brand-mono" />
            <span className="brand-wordmark logo">{t('brandWordmark')}</span>
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/atelier">{t('nav.atelier')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/contact" className="cta">{t('nav.contact')}</Link>
        </nav>
        <div className="lang-switch">
          <button onClick={() => switchLang('de')}>DE</button>
          <button onClick={() => switchLang('en')}>EN</button>
        </div>

        <button className={`hamburger ${open? 'is-open':''}`} aria-label={open ? 'Navigation schließen' : 'Navigation öffnen'} aria-expanded={open} aria-controls="mobileNav" onClick={toggle}>
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {open ? (
              <path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </g>
            )}
          </svg>
        </button>

        <div className={`mobile-backdrop ${open? 'open':''}`} onClick={() => setOpen(false)} aria-hidden={open ? 'false' : 'true'} />

        <div id="mobileNav" ref={menuRef} className={`mobile-nav ${open? 'open':''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
          <button className="close-btn" aria-label="Schließen" onClick={() => setOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <nav>
            <Link to="/" onClick={() => setOpen(false)}>{t('nav.home')}</Link>
            <Link to="/about" onClick={() => setOpen(false)}>{t('nav.about')}</Link>
            <Link to="/atelier" onClick={() => setOpen(false)}>{t('nav.atelier')}</Link>
            <Link to="/services" onClick={() => setOpen(false)}>{t('nav.services')}</Link>
            <Link to="/contact" className="cta" onClick={() => setOpen(false)}>{t('nav.contact')}</Link>
          </nav>
          <div className="mobile-lang">
            <button onClick={() => { switchLang('de'); setOpen(false) }}>DE</button>
            <button onClick={() => { switchLang('en'); setOpen(false) }}>EN</button>
          </div>
        </div>
      </div>
    </header>
  )
}
