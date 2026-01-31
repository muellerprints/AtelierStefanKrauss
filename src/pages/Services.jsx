import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Services(){
  const { t } = useTranslation()
  const items = t('services.list', { returnObjects: true })

  // Get localized heading keys from translations (e.g. 'Kernleistungen' / 'Core Services')
  const headingKeys = new Set(t('services.headings', { returnObjects: true }) || [])

  // Build groups: { title?: string, items: string[] }
  const groups = []
  let current = { items: [] }
  items.forEach(it => {
    if (headingKeys.has(it)) {
      // start a new group with title
      if (current.items.length || current.title) groups.push(current)
      current = { title: it, items: [] }
    } else {
      current.items.push(it)
    }
  })
  if (current.items.length || current.title) groups.push(current)

  return (
    <main className="container">
      <h2>{t('services.title')}</h2>
      {groups.map((g, gi) => (
        <section key={gi}>
          {g.title && <h3>{g.title}</h3>}
          {g.items.length > 0 && (
            <ul>
              {g.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          )}
        </section>
      ))}
    </main>
  )
}
