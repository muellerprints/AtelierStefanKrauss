import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Shipping(){
  const { t } = useTranslation()
  return (
    <div className="container">
      <h2>{t('shipping.title')}</h2>
      <p>{t('shipping.intro')}</p>
      <ul>
        <li>{t('shipping.methods.0')}</li>
        <li>{t('shipping.methods.1')}</li>
      </ul>
      <p>{t('shipping.note')}</p>
    </div>
  )
}
