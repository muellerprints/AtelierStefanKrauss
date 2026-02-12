import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Atelier(){
  const { t } = useTranslation()

  return (
    <main className="container atelier-page">
      <figure className="asset-preview column" style={{marginTop:20}}>
        <img src="/assets/icons/werkzeuge.png" alt={t('atelier.toolsAlt', 'Werkzeuge im Atelier')} />
      </figure>

      <h2>{t('atelier.title')}</h2>
      {t('atelier.description').split(/\n{2,}/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {t('atelier.positioningHeading') && <h3>{t('atelier.positioningHeading')}</h3>}
      {t('atelier.positioning') && t('atelier.positioning').split(/\n{2,}/).map((para, i) => (
        <p key={`pos-${i}`}>{para}</p>
      ))}
    </main>
  )
}
