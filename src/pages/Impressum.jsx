import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Impressum(){
  const { t } = useTranslation()
  return (
    <main className="container">
      <h2>{t('impressum.title')}</h2>
      <p>
        {t('impressum.name')}<br/>
        {t('impressum.owner')}<br/>
        {t('impressum.street')}<br/>
        {t('impressum.cityzip')}
      </p>
      <p>
        {t('impressum.contactLabel')}<br/>
        <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a><br/>
        <a href={`tel:${t('contact.phoneRaw')}`}>{t('contact.phone')}</a>
      </p>
      <h3>{t('impressum.registryTitle')}</h3>
      <p>{t('impressum.registry')}</p>
      <p><em>{t('impressum.note')}</em></p>
    </main>
  )
}
