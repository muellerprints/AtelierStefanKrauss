import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Payment(){
  const { t } = useTranslation()
  return (
    <div className="container">
      <h2>{t('payment.title')}</h2>
      <p>{t('payment.intro')}</p>
      <ul>
        <li>{t('payment.methods.0')}</li>
        <li>{t('payment.methods.1')}</li>
        <li>{t('payment.methods.2')}</li>
      </ul>
      <p>{t('payment.note')}</p>
    </div>
  )
}
