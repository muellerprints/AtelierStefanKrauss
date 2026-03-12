import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

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

  useEffect(() => {
    const main = document.getElementById('content')
    if (!main) return undefined
       main.setAttribute('data-bg-wappen', 'true')
      main.style.setProperty('--wappen-rotate', '-45deg')
      // Increased by 10% from 62.4vw to 68.64vw
      main.style.setProperty('--wappen-size', '68.64vw')
       main.style.setProperty('--wappen-pos-x', '35%')
    return () => {
      main.removeAttribute('data-bg-wappen')
      main.style.removeProperty('--wappen-rotate')
      main.style.removeProperty('--wappen-size')
      main.style.removeProperty('--wappen-pos-x')
    }
  }, [])

  return (
    <PageContainer withViewport pageClass="relative-z1">
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
      </PageContainer>
  )
}
