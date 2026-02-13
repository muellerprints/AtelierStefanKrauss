import React from 'react'
import { useTranslation } from 'react-i18next'

export default function OpeningHours(){
  const { t } = useTranslation()
  return (
    <div className="container">
      <h2>{t('opening.title')}</h2>
      <div style={{maxWidth:720}}>
        <p style={{whiteSpace:'pre-line'}}>{t('opening.text')}</p>
      </div>
    </div>
  )
}
