import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Atelier(){
  const { t } = useTranslation()

  return (
    <div className="container atelier-page">
      <div className="asset-preview" style={{marginTop:20, display:'flex', gap:'10px', justifyContent:'center'}}>
        <img src="/assets/icons/ICONS1.png" alt={t('atelier.toolsAlt', 'Werkzeuge im Atelier')} style={{width:'10%', height:'auto'}} />
        <img src="/assets/icons/ICONS2.png" alt={t('atelier.toolsAlt', 'Werkzeuge im Atelier')} style={{width:'10%', height:'auto'}} />
        <img src="/assets/icons/ICONS3.png" alt={t('atelier.toolsAlt', 'Werkzeuge im Atelier')} style={{width:'10%', height:'auto'}} />
        <img src="/assets/icons/ICONS4.png" alt={t('atelier.toolsAlt', 'Werkzeuge im Atelier')} style={{width:'10%', height:'auto'}} />
      </div>

      <h2>{t('atelier.title')}</h2>
      {t('atelier.description').split(/\n{2,}/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {t('atelier.positioningHeading') && <h3>{t('atelier.positioningHeading')}</h3>}
      {t('atelier.positioning') && t('atelier.positioning').split(/\n{2,}/).map((para, i) => (
        <p key={`pos-${i}`}>{para}</p>
      ))}
    </div>
  )
}
