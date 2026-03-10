import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Atelier(){
  const { t } = useTranslation()
  const wrapperRef = useRef(null)
  const iconsRef = useRef([])

  useEffect(() => {
    // Distribute icons more widely while keeping them fully visible.
    // Place each icon in a quadrant with jitter but clamp positions
    // to safe margins so icons are not cut off.
    const imgs = iconsRef.current.filter(Boolean)
    const safeMin = 12 // percent
    const safeMax = 88 // percent
    imgs.forEach((img, idx) => {
      const col = idx % 2 // 0 = left, 1 = right
      const row = Math.floor(idx / 2) // 0 = top, 1 = bottom
      const baseLeft = col === 0 ? 20 : 80
      const baseTop = row === 0 ? 20 : 80
      const jitterX = (Math.random() * 30) - 15
      const jitterY = (Math.random() * 30) - 15
      let left = baseLeft + jitterX
      let top = baseTop + jitterY
      // Raise the second icon (idx === 1) so it appears higher in the layout
      if (idx === 1) top -= 14
      // Push the third icon (idx === 2) to the far left (use safeMin to avoid clipping)
      // and nudge it further down so it sits lower than the others
      if (idx === 2) {
        left = safeMin
        top += 14
      }
      // Clamp to safe range so icons stay fully visible
      left = Math.min(safeMax, Math.max(safeMin, left))
      top = Math.min(safeMax, Math.max(safeMin, top))
      let rot = (Math.random() * 40) - 20 // -20..20deg
      // Rotate the hammer (second icon) by additional 90deg
      if (idx === 1) rot += 90
      const scale = 0.85 + Math.random() * 0.6
      img.style.position = 'absolute'
      img.style.left = `${left}%`
      img.style.top = `${top}%`
      img.style.transform = `translate(-50%,-50%) rotate(${rot}deg) scale(${scale})`
      img.style.pointerEvents = 'none'
      img.style.willChange = 'transform, opacity'
    })
  }, [])

  return (
    <div className="container atelier-page" ref={wrapperRef}>
      {/* Decorative absolute icon overlay (randomized positions applied via useEffect) */}
      <div className="atelier-icons-bg" aria-hidden="true">
        <img ref={el => iconsRef.current[0] = el} className="atelier-bg-icon" src="/assets/icons/ICONS1.png" alt="" />
        <img ref={el => iconsRef.current[1] = el} className="atelier-bg-icon" src="/assets/icons/ICONS2.png" alt="" />
        <img ref={el => iconsRef.current[2] = el} className="atelier-bg-icon" src="/assets/icons/ICONS3.png" alt="" />
        <img ref={el => iconsRef.current[3] = el} className="atelier-bg-icon" src="/assets/icons/ICONS4.png" alt="" />
      </div>

      {/* Visible icon row intentionally removed - decorative icons are placed absolutely in the background overlay */}

      <h2>{t('atelier.title')}</h2>
      {t('atelier.description').split(/\n{2,}/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {t('atelier.positioningHeading') && <h3>{t('atelier.positioningHeading')}</h3>}
      {t('atelier.positioning') && t('atelier.positioning').split(/\n{2,}/).map((para, i) => (
        <p key={`pos-${i}`}>{para}</p>
      ))}
    </div>
  )
}
