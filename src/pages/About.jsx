import React from 'react'
import { useTranslation } from 'react-i18next'
import portrait from '../assets/photos/Portrait.jpg'

export default function About(){
  const { t } = useTranslation()
  const vita = t('about.vita', { returnObjects: true }) || []

  return (
    <div className="container about-page">
      <div className="about-grid">
        <div className="about-text">
          <h2>{t('about.title')}</h2>
          <p>{t('about.intro1')}</p>
          <h3>{t('about.vitaTitle')}</h3>
          <ul className="vita-list">
            {vita.map((item,i)=> (
              <li key={i}><strong>{item.year}</strong> — {item.text}</li>
            ))}
          </ul>
        </div>
        <aside className="about-portrait">
          <img src={portrait} alt={t('about.portraitCaption')} />
          <p className="caption">{t('about.portraitCaption')}</p>
        </aside>
      </div>
    </div>
  )
}
