import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Terms(){
  const { t } = useTranslation()
  return (
    <PageContainer pageClass="terms-page">
      <h2>{t('terms.title')}</h2>
      <p>{t('terms.intro')}</p>
      <h3>{t('terms.contractTitle')}</h3>
      <p>{t('terms.contract')}</p>
      <h3>{t('terms.pricesTitle')}</h3>
      <p>{t('terms.prices')}</p>
      <h3>{t('terms.deliveryTitle')}</h3>
      <p>{t('terms.delivery')}</p>
      <h3>{t('terms.warrantyTitle')}</h3>
      <p>{t('terms.warranty')}</p>
      <p><em>{t('terms.note')}</em></p>
    </PageContainer>
  )
}
