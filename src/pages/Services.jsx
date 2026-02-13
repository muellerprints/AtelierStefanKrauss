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
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 160px)' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/assets/icons/wappen-outline.svg)',
        backgroundSize: '800px',
        backgroundPosition: '75% 25%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.06,
        pointerEvents: 'none',
        zIndex: 0,
        transform: 'rotate(-45deg)'
      }} />
      <main className="container" style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  )
}
