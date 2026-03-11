import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Directions(){
  const { t } = useTranslation()
  return (
    <PageContainer pageClass="directions-page">
      <h2>{t('directions.title')}</h2>
      <div className="max-width-720">
        <p className="pre-line">{t('directions.text')}</p>
      </div>
      <div className="map-container">
          <iframe
          title="Anfahrt – Goldschmiedeatelier"
          src="https://www.google.com/maps?q=Neuberg+11+75210+Keltern&output=embed"
          width="100%"
          height="420"
          className="iframe-borderless"
          allow="fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="mt-12"><a href="https://www.google.com/maps/search/?api=1&query=Neuberg+11+75210+Keltern" target="_blank" rel="noreferrer">{t('directions.openInMaps') || 'In Google Maps öffnen'}</a></p>
      </div>
    </PageContainer>
  )
}
