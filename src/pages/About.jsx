import React from 'react'
import { useTranslation } from 'react-i18next'
import portrait from '../assets/photos/Portrait.jpg'

export default function About(){
  const { t } = useTranslation()
  const vita = t('about.vita', { returnObjects: true }) || []

  return (
    <>
      <div className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-hero-title">Stefan Krauss</h1>
          <p className="about-toptext">{t('about.intro1')}</p>
        </div>
      </div>

      <div className="container about-page">
        <div className="about-grid">
        <div className="about-text">
          <h3 className="vita-heading">Vita – Stefan Krauss</h3>
          <ul className="vita-list">
            {vita.map((item,i)=> (
              <li key={i}><strong>{item.year}</strong><span className="vita-desc">{item.text}</span></li>
            ))}
          </ul>
        </div>
        <aside className="about-portrait">
          <img src={portrait} alt={t('about.portraitCaption')} />
          <p className="caption">{t('about.portraitCaption')}</p>
        </aside>
      </div>
    </div>
    </>
  )
}
