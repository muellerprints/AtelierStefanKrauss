import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero({ maxImages } = {}){
  const { t } = useTranslation()
  const slides = t('hero.slides', { returnObjects: true })
  // Generate image paths from public/assets/photos named hero-1.jpg, hero-2.jpg, ...
  // allow images to be more than slides: build images from available hero-N files
  const images = []
  // determine max hero images: prop -> env -> default(4)
  const envMax = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_MAX_HERO_IMAGES ? parseInt(import.meta.env.VITE_MAX_HERO_IMAGES, 10) : undefined
  const MAX_HERO_IMAGES = Number.isFinite(Number(maxImages)) ? Number(maxImages) : (Number.isFinite(envMax) ? envMax : 4)
  for (let i = 1; i <= Math.max(1, MAX_HERO_IMAGES); i++) images.push(`/assets/photos/hero-${i}.jpg`)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const count = Math.max(slides.length, images.length)
    const id = setInterval(() => setIndex(i => (i + 1) % count), 5000)
    return () => clearInterval(id)
  }, [slides.length, images.length])

  const count = Math.max(slides.length, images.length)
  const slidesData = Array.from({ length: count }).map((_, i) => ({
    title: slides[i]?.title || '',
    lead: slides[i]?.lead || '',
    src: images[i] || ''
  }))
  const parallaxRef = useRef(null)
  const layersRef = useRef([])
  const [leadBg, setLeadBg] = useState('light')

  useEffect(() => {
    if (!parallaxRef.current) return
    let raf = null
    const onMove = (e) => {
      if (!parallaxRef.current) return
      const rect = parallaxRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const relX = (e.clientX - cx) / rect.width
      const relY = (e.clientY - cy) / rect.height

      layersRef.current.forEach((layer, i) => {
        if (!layer) return
        const depth = (i + 1) / (layersRef.current.length + 1)
        const moveX = -relX * 18 * depth
        const moveY = -relY * 10 * depth
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${1 + depth * 0.02})`
      })
    }

    const onScroll = () => {
      if (!parallaxRef.current) return
      const rect = parallaxRef.current.getBoundingClientRect()
      const viewCenter = window.innerHeight / 2
      const offset = (rect.top + rect.height / 2 - viewCenter) / window.innerHeight
      layersRef.current.forEach((layer, i) => {
        if (!layer) return
        const depth = (i + 1) / (layersRef.current.length + 1)
        const moveY = offset * 40 * depth
        layer.style.transform = layer.style.transform.replace(/translate3d\([^)]*\)/, `translate3d(0px, ${moveY}px, 0)`) || `translate3d(0px, ${moveY}px, 0)`
      })
    }

    const mouseHandler = (e) => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => onMove(e))
    }

    window.addEventListener('mousemove', mouseHandler)
    window.addEventListener('scroll', onScroll, { passive: true })

    // initial position
    if (parallaxRef.current) onScroll()

    return () => {
      window.removeEventListener('mousemove', mouseHandler)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // analyze current slide image and decide whether lead text sits on
  // a dark or light background; apply a class accordingly
  useEffect(() => {
    const src = slidesData[index]?.src
    if (!src) {
      setLeadBg('light')
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    let mounted = true
    img.onload = () => {
      try {
        // larger sampling area for more robust luminance detection on busy images
        const w = 160, h = 160
        const c = document.createElement('canvas')
        c.width = w
        c.height = h
        const ctx = c.getContext('2d')
        ctx.drawImage(img, 0, 0, w, h)
        // sample a larger central block for average luminance (40x40)
        const sx = Math.max(0, Math.floor(w / 2 - 20))
        const sy = Math.max(0, Math.floor(h / 2 - 20))
        const sw = 40, sh = 40
        const data = ctx.getImageData(sx, sy, sw, sh).data
        let total = 0
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2]
          // relative luminance (Rec. 709)
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
          total += lum
        }
        const avg = total / (data.length / 4)
        const normalized = avg / 255
        // threshold: if background is darker than this luminance, treat as dark
        // Raised from 0.60 -> 0.65 to make detection slightly more conservative
        // (treats more mid-tones as "dark" so light text is used more often).
        const LUMINANCE_THRESHOLD = 0.65
        if (mounted) setLeadBg(normalized < LUMINANCE_THRESHOLD ? 'dark' : 'light')
      } catch (e) {
        if (mounted) setLeadBg('light')
      }
    }
    img.onerror = () => { if (mounted) setLeadBg('light') }
    return () => { mounted = false }
  }, [index, slidesData])

  return (
    <section className="hero">
      <div className="hero-slideshow" aria-hidden>
        <div className="parallax" ref={parallaxRef}>
          {images.map((src, i) => (
            <div key={i} ref={el => layersRef.current[i] = el} className={`parallax-layer layer-${i}`} style={{backgroundImage:`url(${src})`}} />
          ))}
        </div>
        {slidesData.map((s, i) => (
          <div key={i} className={`slide ${i === index ? 'active' : ''}`} style={{backgroundImage:`url(${s.src})`}} />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className={`hero-content container ${index % 2 === 0 ? 'from-up' : 'from-left'} ${leadBg === 'dark' ? 'bg-dark' : 'bg-light'}`} key={index}>
        <h1>{slidesData[index]?.title || t('siteTitle')}</h1>
        <p className="lead" dangerouslySetInnerHTML={{ __html: slidesData[index]?.lead || t('tagline') }} />
      </div>
    </section>
  )
}
