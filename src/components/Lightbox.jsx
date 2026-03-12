import React, { useEffect, useState } from 'react'

export default function Lightbox({ src, onClose }){
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!src) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'Enter') setZoomed(s => !s)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [src, onClose])

  if (!src) return null

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}>
      <div className={`lightbox-inner ${zoomed ? 'zoomed' : ''}`} onDoubleClick={() => setZoomed(z => !z)}>
        <button className="lightbox-close" aria-label="Schließen" onClick={() => onClose?.()}>
          <span aria-hidden className="lightbox-close-icon">✕</span>
          <span className="lightbox-close-text">close</span>
        </button>
        <img src={src} alt="Vergrößertes Foto" className="lightbox-image" />
      </div>
    </div>
  )
}
