import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Shipping(){
  const { t } = useTranslation()
  return (
    <PageContainer pageClass="shipping-page">
      <h2>{t('shipping.title')}</h2>
      <p>{t('shipping.intro')}</p>
      <ul>
        <li>{t('shipping.methods.0')}</li>
        <li>{t('shipping.methods.1')}</li>
      </ul>
      <p>{t('shipping.note')}</p>
    </PageContainer>
  )
}
