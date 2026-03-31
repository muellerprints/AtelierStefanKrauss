import React from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Impressum(){
  const { t } = useTranslation()
  return (
    <PageContainer>
      <h2>{t('impressum.title')}</h2>
      <p>
        {t('impressum.name')}<br/>
        {t('impressum.owner')}<br/>
        {t('impressum.street')}<br/>
        {t('impressum.cityzip')}
      </p>
      {t('impressum.vatId') && (
        <p>{t('impressum.vatId')}</p>
      )}
      <p>
        {t('impressum.contactLabel')}<br/>
        <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a><br/>
        <a href={`tel:${t('contact.phoneRaw')}`}>{t('contact.phone')}</a>
      </p>
      {t('impressum.odr') && (
        <div dangerouslySetInnerHTML={{ __html: t('impressum.odr').replace(/\n/g, '<br/>') }} />
      )}
    </PageContainer>
  )
}
