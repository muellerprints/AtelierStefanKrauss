import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Services(){
  const { t } = useTranslation()
  const items = t('services.list', { returnObjects: true })

  return (
    <main className="container">
      <h2>{t('services.title')}</h2>
      <ul>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </main>
  )
}
