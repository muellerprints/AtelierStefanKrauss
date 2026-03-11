import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function OpeningHours(){
  const { t } = useTranslation()
  return (
    <PageContainer>
      <h2>{t('opening.title')}</h2>
      <div className="max-width-720">
        <p className="pre-line">{t('opening.text')}</p>
      </div>
    </PageContainer>
  )
}
