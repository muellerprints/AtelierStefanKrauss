import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Atelier(){
  const { t } = useTranslation()

  return (
    <main className="container">
      <h2>{t('atelier.title')}</h2>
      <p>{t('atelier.description')}</p>
    </main>
  )
}
