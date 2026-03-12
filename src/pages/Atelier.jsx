import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PageContainer from '../components/PageContainer'

export default function Atelier(){
  const { t } = useTranslation()
  useEffect(() => {
    const main = document.getElementById('content')
    if (!main) return undefined
    main.setAttribute('data-bg-wappen', 'true')
    // Use maximal emblem size on Atelier page to increase coverage
    main.style.setProperty('--wappen-rotate', '120deg')
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
    <PageContainer pageClass="atelier-page relative-z1">
      <h2>{t('atelier.title')}</h2>
      {t('atelier.description').split(/\n{2,}/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {t('atelier.positioningHeading') && <h3>{t('atelier.positioningHeading')}</h3>}
      {t('atelier.positioning') && t('atelier.positioning').split(/\n{2,}/).map((para, i) => (
        <p key={`pos-${i}`}>{para}</p>
      ))}
    </PageContainer>
  )
}
