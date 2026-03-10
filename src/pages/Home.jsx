import React, { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import Lightbox from '../components/Lightbox'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// grid images are stored in public/assets/photos as grid-1.jpg .. grid-N.jpg

export default function Home(){
  const { t } = useTranslation()
  const tiles = t('home.tiles', { returnObjects: true })
  const featurePhotoMeta = t('home.featurePhotos', { returnObjects: true })
  const photoLabels = t('home.photoLabels', { returnObjects: true })
  const FEATURE_PHOTO_SRCS = [
    '/assets/photos/feature-7.jpg',
    '/assets/photos/feature-8.jpg',
    '/assets/photos/feature-9.jpg'
  ]
  const [remotePhotos, setRemotePhotos] = useState([])
  const [lightboxSrc, setLightboxSrc] = useState(null)

  useEffect(() => {
    // detect grid-N.jpg files in public/assets/photos by probing a small range
    const maxCandidates = 16
    const arr = new Array(maxCandidates)
    let pending = maxCandidates
    let mounted = true

    const checkDone = () => {
      if (!mounted) return
      pending--
      if (pending === 0) {
        setRemotePhotos(arr.filter(Boolean))
      }
    }

    for (let i = 1; i <= maxCandidates; i++) {
      const url = `/assets/photos/grid-${i}.jpg`
      const img = new Image()
      // capture i in closure
      ;((idx) => {
        img.onload = () => { arr[idx] = url; checkDone() }
        img.onerror = () => { arr[idx] = null; checkDone() }
      })(i - 1)
      img.src = url
    }

    return () => { mounted = false }
  }, [])
  const photoGridRef = useRef(null)
  const featureSectionsRef = useRef([])
  const getRect = (el) => (el && typeof el.getBoundingClientRect === 'function') ? el.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 }

  useEffect(() => {
    // Parallax + reveal for feature sections
    const sections = Array.from(document.querySelectorAll('.feature-photo-section'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target
        const rect = getRect(el)
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          // compute a pixel shift so the content center lands near 25%/75% of the section
          const targetPercent = el.classList.contains('reverse') ? 25 : 75
          const targetX = ((targetPercent - 50) / 100) * rect.width
          const margin = el.classList.contains('reverse') ? -12 : 12
          const shift = (targetX + margin) * 0.5
          el.dataset.sideShift = String(shift)
          // attach pointermove for parallax when in view
          const par = el.querySelector('.feature-parallax')
          if (par) par.addEventListener('pointermove', pointerMove)
          // ensure content updates immediately
          updateContentTransform(el)
        } else {
          el.classList.remove('in-view')
          delete el.dataset.sideShift
          const par = el.querySelector('.feature-parallax')
          if (par) par.removeEventListener('pointermove', pointerMove)
          const img = el.querySelector('.feature-photo-img')
          if (img) img.style.transform = ''
          const content = el.querySelector('.feature-content')
          if (content) {
            // For push-down items (7 and 9) position the content so its
            // vertical center aligns with the photo's vertical center.
            if (content.classList.contains('push-down')) {
              const img = el.querySelector('.feature-photo-img')
              if (img) {
                const secRect = getRect(el)
                const imgRect = getRect(img)
                const secCenter = secRect.top + secRect.height / 2
                const imgCenter = imgRect.top + imgRect.height / 2
                const delta = imgCenter - secCenter
                const startScale = 0.20 // reduce initial alignment amplitude (moved higher to avoid overlap)
                content.style.transform = `translate3d(0, ${delta * startScale}px, 0)`
              } else {
                content.style.transform = 'translate3d(0, 0, 0)'
              }
            } else {
              content.style.transform = 'translate3d(0, -50%, 0)'
            }
          }
        }
      })
    }, { threshold: 0.35, rootMargin: '0px 0px -10% 0px' })

    sections.forEach(s => io.observe(s))

    // recompute side shifts (pixel values) for all sections, and update visible ones
    const recomputeSideShifts = () => {
      sections.forEach(sec => {
        const rect = getRect(sec)
        const targetPercent = sec.classList.contains('reverse') ? 25 : 75
        const targetX = ((targetPercent - 50) / 100) * rect.width
        const margin = sec.classList.contains('reverse') ? -12 : 12
        sec.dataset.sideShift = String((targetX + margin) * 0.5)
        if (sec.classList.contains('in-view')) updateContentTransform(sec)
      })
    }

    // initial computation and resize handling
    recomputeSideShifts()
    window.addEventListener('resize', recomputeSideShifts, { passive: true })

    // Safari fallback: ensure visually-centered sections get marked 'in-view'
    const ensureInView = () => {
      const viewCenter = window.innerHeight / 2
      sections.forEach(sec => {
        if (sec.classList.contains('in-view')) return
        const r = getRect(sec)
        if (r.top < viewCenter && r.bottom > viewCenter - Math.min(80, r.height * 0.1)) {
          sec.classList.add('in-view')
          const par = sec.querySelector('.feature-parallax')
          if (par) par.addEventListener('pointermove', pointerMove)
          recomputeSideShifts()
          updateContentTransform(sec)
        }
      })
    }

    window.addEventListener('scroll', ensureInView, { passive: true })

    let raf = null
    function updateContentTransform(sec) {
      const content = sec.querySelector('.feature-content')
      if (!content) return
      const px = parseFloat(sec.dataset.pointerX || '0') || 0
      const py = parseFloat(sec.dataset.pointerY || '0') || 0
      const sx = parseFloat(sec.dataset.scrollX || '0') || 0
      const sy = parseFloat(sec.dataset.scrollY || '0') || 0
      let side = parseFloat(sec.dataset.sideShift || '0') || 0
      // If the content is explicitly aligned to the right, invert the side-shift
      if (content.classList && content.classList.contains('align-right')) side = -side
      // Compute a scroll-progress-based vertical interpolation so the
      // text can start over the photo and end on the white area beside it.
      const rect = getRect(sec)
      const viewCenter = window.innerHeight / 2
      // progress 0..1 where 0 = section top at viewport center, 1 = section bottom at viewport center
      const progress = Math.max(0, Math.min(1, (viewCenter - rect.top) / (rect.height || 1)))

      // initialY: place text over the image (slightly above center) — reduced amplitude for gentler motion
      const initialY = -Math.min( rect.height * 0.06, 80 )
      // finalY: on the white area beside image (a positive offset) — reduced amplitude for gentler motion
      const finalY = Math.min( rect.height * 0.06, 80 )

      // lerp between initial and final by progress
      let verticalBase = initialY + (finalY - initialY) * progress

      // Combine pointer and scroll micro-offsets
      let pointerX = px
      let pointerY = py
      let scrollX = sx
      let scrollY = sy
      // Reduce micro-movements for specific content types:
      // - push-down sections already use a reduced scale
      // - `.feature-content.hero-content.container` should also move less
      let microScale = 1
      if (content.classList && content.classList.contains('push-down')) {
        microScale = 0.3
      } else if (content.matches && content.matches('.feature-content.hero-content.container')) {
        microScale = 0.2
      }
      if (microScale !== 1) {
        pointerX *= microScale
        pointerY *= microScale
        scrollX *= microScale
        scrollY *= microScale
      }

      let x = side + pointerX + scrollX // include the side shift when present
      let y = verticalBase + pointerY + scrollY
      // For pushed-down content, nudge it upward so it doesn't overlap the image
      if (content.classList && content.classList.contains('push-down')) {
        let pushUp = Math.min(rect.height * 0.20, 160) // up to 160px upward nudge on large screens
        if (window.innerWidth < 900) pushUp = Math.min(pushUp, 80) // reduce on mobile
        y -= pushUp
      }
      // invert vertical direction for reversed sections
      if (sec.classList.contains('reverse')) y = -y
      content.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    // smoothing loop: interpolate pointer/scroll current values toward targets
    function smoothLoop() {
      let running = false
      sections.forEach(sec => {
        const content = sec.querySelector('.feature-content')
        if (!content) return
        // current and target pointer values
        const curPX = parseFloat(sec.dataset.pointerX || '0') || 0
        const curPY = parseFloat(sec.dataset.pointerY || '0') || 0
        const tgtPX = parseFloat(sec.dataset.pointerTargetX || '0') || 0
        const tgtPY = parseFloat(sec.dataset.pointerTargetY || '0') || 0
        // current and target scroll values
        const curSX = parseFloat(sec.dataset.scrollX || '0') || 0
        const curSY = parseFloat(sec.dataset.scrollY || '0') || 0
        const tgtSX = parseFloat(sec.dataset.scrollTargetX || '0') || 0
        const tgtSY = parseFloat(sec.dataset.scrollTargetY || '0') || 0

        // lerp factor controls smoothness (smaller = smoother)
        const k = 0.12
        const nextPX = curPX + (tgtPX - curPX) * k
        const nextPY = curPY + (tgtPY - curPY) * k
        const nextSX = curSX + (tgtSX - curSX) * k
        const nextSY = curSY + (tgtSY - curSY) * k

        // write back current interpolated values
        sec.dataset.pointerX = String(Math.abs(nextPX) < 0.001 ? 0 : nextPX)
        sec.dataset.pointerY = String(Math.abs(nextPY) < 0.001 ? 0 : nextPY)
        sec.dataset.scrollX = String(Math.abs(nextSX) < 0.001 ? 0 : nextSX)
        sec.dataset.scrollY = String(Math.abs(nextSY) < 0.001 ? 0 : nextSY)

        // if not yet at targets, keep running
        if (Math.abs(tgtPX - nextPX) > 0.01 || Math.abs(tgtPY - nextPY) > 0.01 || Math.abs(tgtSX - nextSX) > 0.01 || Math.abs(tgtSY - nextSY) > 0.01) {
          running = true
        }

        // update visible transform for sections currently in view
        if (sec.classList.contains('in-view')) updateContentTransform(sec)
      })
      if (running) {
        raf = requestAnimationFrame(smoothLoop)
      } else {
        raf = null
      }
    }

    function pointerMove(e) {
      const sec = e.currentTarget.closest('.feature-photo-section')
      if (!sec) return
      const img = sec.querySelector('.feature-photo-img')
      const rect = getRect(sec)
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      const depth = 12
      const targetX = relX * depth
      const targetY = relY * depth * 0.35
      const reverse = sec.classList.contains('reverse')
      const contentX = (reverse ? -1 : 1) * -targetX * 0.04
      const contentY = targetY * 0.12
      // Store pointer targets on section; smoothing RAF will interpolate current values
      sec.dataset.pointerTargetX = String(contentX)
      sec.dataset.pointerTargetY = String(contentY)
      // apply immediate visual transform to the image for responsive feel
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (img) {
          const baseScale = parseFloat((sec.dataset.baseScale) || '1') || 1
          const scale = (baseScale * 1.03).toFixed(3)
          img.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${scale})`
        }
        // start smoothing loop
        raf = requestAnimationFrame(smoothLoop)
      })
    }

    // scroll-driven subtle vertical parallax — write targets, smoothing loop will interpolate
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        let needsSmoothing = false
        sections.forEach(sec => {
          if (!sec.classList.contains('in-view')) return
          const img = sec.querySelector('.feature-photo-img')
          const content = sec.querySelector('.feature-content')
          const rect = getRect(sec)
          const viewCenter = window.innerHeight / 2
          const offset = (rect.top + rect.height / 2 - viewCenter) / window.innerHeight
          const moveY = offset * 12
          if (img) {
            const par = sec.querySelector('.feature-parallax')
            const baseScale = parseFloat((par?.dataset.baseScale) || '1') || 1
            const scale = (baseScale * 1.02).toFixed(3)
            img.style.transform = `translate3d(0px, ${moveY}px, 0) scale(${scale})`
          }
          if (content) {
            const reverse = sec.classList.contains('reverse')
            const contentX = (reverse ? -1 : 1) * Math.abs(offset) * 4
            const contentY = offset * 6
            // store scroll targets for combination with pointer offsets
            sec.dataset.scrollTargetX = String(contentX)
            sec.dataset.scrollTargetY = String(contentY)
            needsSmoothing = true
          }
        })
        if (needsSmoothing) raf = requestAnimationFrame(smoothLoop)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    // smoothing loop: interpolate pointer/scroll current values toward targets
    function smoothLoop() {
      let running = false
      sections.forEach(sec => {
        const content = sec.querySelector('.feature-content')
        if (!content) return
        // current and target pointer values
        const curPX = parseFloat(sec.dataset.pointerX || '0') || 0
        const curPY = parseFloat(sec.dataset.pointerY || '0') || 0
        const tgtPX = parseFloat(sec.dataset.pointerTargetX || '0') || 0
        const tgtPY = parseFloat(sec.dataset.pointerTargetY || '0') || 0
        // current and target scroll values
        const curSX = parseFloat(sec.dataset.scrollX || '0') || 0
        const curSY = parseFloat(sec.dataset.scrollY || '0') || 0
        const tgtSX = parseFloat(sec.dataset.scrollTargetX || '0') || 0
        const tgtSY = parseFloat(sec.dataset.scrollTargetY || '0') || 0

        // lerp factor controls smoothness (smaller = smoother)
        const k = 0.12
        const nextPX = curPX + (tgtPX - curPX) * k
        const nextPY = curPY + (tgtPY - curPY) * k
        const nextSX = curSX + (tgtSX - curSX) * k
        const nextSY = curSY + (tgtSY - curSY) * k

        // write back current interpolated values
        sec.dataset.pointerX = String(Math.abs(nextPX) < 0.001 ? 0 : nextPX)
        sec.dataset.pointerY = String(Math.abs(nextPY) < 0.001 ? 0 : nextPY)
        sec.dataset.scrollX = String(Math.abs(nextSX) < 0.001 ? 0 : nextSX)
        sec.dataset.scrollY = String(Math.abs(nextSY) < 0.001 ? 0 : nextSY)

        // if not yet at targets, keep running
        if (Math.abs(tgtPX - nextPX) > 0.01 || Math.abs(tgtPY - nextPY) > 0.01 || Math.abs(tgtSX - nextSX) > 0.01 || Math.abs(tgtSY - nextSY) > 0.01) {
          running = true
        }

        // update visible transform for sections currently in view
        if (sec.classList.contains('in-view')) updateContentTransform(sec)
      })
      if (running) {
        raf = requestAnimationFrame(smoothLoop)
      } else {
        raf = null
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', recomputeSideShifts)
      window.removeEventListener('scroll', ensureInView)
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.photo-item[data-src]'))
    if (!items.length) return
    const load = (el) => {
      const src = el.getAttribute('data-src')
      if (!src) return
      el.style.backgroundImage = `url(${src})`
      el.removeAttribute('data-src')
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            load(e.target)
            obs.unobserve(e.target)
          }
        })
      }, { rootMargin: '200px' })

      // Immediately load items that are already within the viewport + margin
      const viewportThreshold = window.innerHeight + 200
      items.forEach(i => {
        const rect = getRect(i)
        if (rect.top <= viewportThreshold) {
          load(i)
        } else {
          io.observe(i)
        }
      })

      return () => io.disconnect()
    } else {
      // fallback: load all
      items.forEach(i => load(i))
    }
  }, [])

  useEffect(() => {
    const el = photoGridRef.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0
    let activePointerId = null

    const onPointerDown = (e) => {
      el.setPointerCapture?.(e.pointerId)
      activePointerId = e.pointerId
      isDown = true
      startX = e.clientX
      scrollLeft = el.scrollLeft
      el.classList.add('is-dragging')
    }

    const onPointerMove = (e) => {
      if (!isDown) return
      const x = e.clientX
      const walk = startX - x
      el.scrollLeft = scrollLeft + walk
    }

    const endDrag = (e) => {
      if (activePointerId != null) el.releasePointerCapture?.(activePointerId)
      isDown = false
      activePointerId = null
      el.classList.remove('is-dragging')
    }

    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        el.scrollBy({ left: -Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
      } else if (e.key === 'ArrowRight') {
        el.scrollBy({ left: Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', endDrag)
    el.addEventListener('pointercancel', endDrag)
    el.addEventListener('pointerleave', endDrag)
    el.addEventListener('keydown', onKey)

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', endDrag)
      el.removeEventListener('pointercancel', endDrag)
      el.removeEventListener('pointerleave', endDrag)
      el.removeEventListener('keydown', onKey)
    }
  }, [])

  const scrollPrev = () => {
    const el = photoGridRef.current
    if (!el) return
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
    el.focus({ preventScroll: true })
  }

  const scrollNext = () => {
    const el = photoGridRef.current
    if (!el) return
    el.scrollBy({ left: Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
    el.focus({ preventScroll: true })
  }

  return (
    <div className="crest-main">
      <Hero />
      <div className="photo-carousel container">
        <button className="carousel-button prev" onClick={scrollPrev} aria-label="Vorherige Fotos">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </button>
        <section id="photoGrid" ref={photoGridRef} className="photo-grid" role="list" aria-label={t('home.photos', 'Gallery')} tabIndex={0}>
          {remotePhotos.map((src,i) => {
            const label = photoLabels[i] || `Foto ${i+1}`
            return (
            <div className="photo-item" key={i} role="listitem" tabIndex={0} aria-label={label}>
              <img src={src} alt={label} />
              <div className="photo-overlay" aria-hidden="true">
                <div className="photo-overlay-content">
                  <img src={`${import.meta.env.BASE_URL}assets/icons/wappen-outline-weiss.png`} alt="Wappen" className="overlay-wappen" />
                  <span className="overlay-title">{label}</span>
                </div>
              </div>
            </div>
            )
          })}
        </section>
        <button className="carousel-button next" onClick={scrollNext} aria-label="Nächste Fotos">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </button>
      </div>
      <div className="feature-photos container" aria-label="Feature Fotos">
        {featurePhotoMeta.map((meta, i) => {
          const item = { src: FEATURE_PHOTO_SRCS[i], title: meta.title, text: meta.text }
          const linkTarget = meta.link || meta.href || '/'
            return (
              <section className={`feature-photo-section ${i === 1 ? 'reverse' : ''}`} key={i} ref={el => { /* placeholder for refs set later */ }}>
                {/* Uniform layout: content first (like photo 8), link/photo after. Show the large number only for the middle/photo-8 (i===1) unless the title already contains it. */}
                <div className={`feature-content hero-content container ${ (i === 0 || i === 1 || i === 2) ? 'push-down' : '' }`}>
                  <h2>
                    <span className="photo-title">{item.title}</span>
                  </h2>
                  <p>{item.text}</p>
                </div>
                      <Link to={linkTarget} className="feature-link" aria-label={item.title} onClick={(e) => { e.preventDefault(); setLightboxSrc(item.src) }}>
                        <div className={`feature-photo feature-photo--large`}>
                          <div className="feature-parallax" data-index={i} data-base-scale={i === 2 ? '1.10' : '1'}>
                            <img src={item.src} alt={item.title} className="feature-photo-img" />
                            <div className="feature-overlay" aria-hidden />
                          </div>
                        </div>
                      </Link>
              </section>
            )
        })}
      </div>
      <section className="teasers container">
        {tiles.map((tile, i) => (
          <Link to={tile.link || '/'} className="tile" key={i}>
            <h3>{tile.title}</h3>
            <p>{tile.text}</p>
          </Link>
        ))}
      </section>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
