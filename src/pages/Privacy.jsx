import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Privacy(){
  const { t } = useTranslation()
  return (
    <main className="container">
      <h2>{t('privacy.title')}</h2>
      <p>{t('privacy.intro')}</p>
      <h3>{t('privacy.responsibleTitle')}</h3>
      <p>{t('privacy.responsible')}</p>
      <h3>{t('privacy.collectedTitle')}</h3>
      <p>{t('privacy.collected')}</p>
      <h3>{t('privacy.purposesTitle')}</h3>
      <p>{t('privacy.purposes')}</p>
      <h3>{t('privacy.rightsTitle')}</h3>
      <p>{t('privacy.rights')}</p>
      <p><em>{t('privacy.note')}</em></p>
    </main>
  )
}
