import React, { useEffect, useRef } from 'react'
import './CrestMotion.css'

export default function CrestMotion({ background = false, forceAnimate = false, parallax = 'both', count = 3, layout = 'random' }) {
  const cls = `crest-motion ${background ? 'crest-motion--bg' : ''} ${forceAnimate ? 'crest-motion--force-animate' : ''}`.trim()
  const wrapperRef = useRef(null)
  const targ = useRef({ x: 0, y: 0, rot: 0 })
  const cur = useRef({ x: 0, y: 0, rot: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce && !forceAnimate) return

    // handlers
    function onPointer(e) {
      if (parallax === 'scroll') return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      // subtle multipliers
      targ.current.x = dx * 18
      targ.current.y = dy * -18
      targ.current.rot = dx * 2
      startLoop()
    }

    function onScroll() {
      if (parallax === 'mouse') return
      const rect = el.getBoundingClientRect()
      const viewCenter = window.innerHeight / 2
      const offset = (rect.top + rect.height / 2 - viewCenter) / window.innerHeight
      // gentle vertical move depending on section position
      targ.current.y = -offset * 36
      targ.current.x = offset * 8
      targ.current.rot = offset * 1.2
      startLoop()
    }

    function frame() {
      // lerp current towards target
      const k = 0.12
      cur.current.x += (targ.current.x - cur.current.x) * k
      cur.current.y += (targ.current.y - cur.current.y) * k
      cur.current.rot += (targ.current.rot - cur.current.rot) * k
      const t = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) rotate(${cur.current.rot}deg)`
      el.style.transform = t
      rafRef.current = requestAnimationFrame(frame)
    }

    function startLoop() {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(frame)
    }

    if (parallax === 'mouse' || parallax === 'both') {
      window.addEventListener('pointermove', onPointer, { passive: true })
    }
    if (parallax === 'scroll' || parallax === 'both') {
      window.addEventListener('scroll', onScroll, { passive: true })
      // init once
      onScroll()
    }

    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [parallax, forceAnimate])

    // helper to produce multiple marks with varied positions
    const renderMarks = () => {
      const n = Math.max(1, parseInt(count, 10) || 1)
      // color palette (can be adjusted)
      const palette = ['#b89b6b', '#e79b6b', '#c98a9a']
      const arr = new Array(n).fill(0).map((_, i) => {
        // initial random delay + scale; exact positions set on mount/resize
        const scale = 0.95 + Math.random() * 0.4
        const delay = (Math.random() * 1.6).toFixed(2) + 's'
        const pant = `var(--pantone-${(i % 3) + 1})`
        // font size will be overridden for preset, default uses scale
        const fontSize = `calc(${Math.round(120 * scale)}px)`
        // use a gray base + a pantone overlay for the dual-tone effect
        const style = {
          '--delay': delay,
          '--scale': String(scale),
          '--mark-color-a': 'var(--neutral)',
          '--mark-color-b': pant,
          '--mark-size': fontSize,
        }
        return (
          <div key={i} className="crest-mark" aria-hidden style={style} data-i={i}>
            <span className="crest-mark__base">SK</span>
            <span className="crest-mark__overlay">SK</span>
          </div>
        )
      })
      return arr
    }

  // distribute marks randomly within the visible crest wrapper
  useEffect(() => {
    if (!background) return
    const wrap = wrapperRef.current
    if (!wrap) return

    let mounted = true
    let retryId = null

    const place = () => {
      const marks = Array.from(wrap.querySelectorAll('.crest-mark'))
      const rect = wrap.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      if (layout === 'preset') {
        // primary left-top
        const m0 = marks[0]
        if (m0) {
          const ox0 = Math.round(-rect.width / 2 + rect.width * 0.30)
          const oy0 = Math.round(-rect.height / 2 + rect.height * 0.05)
          m0.style.setProperty('--ox', `${ox0}px`)
          m0.style.setProperty('--oy', `${oy0}px`)
          m0.style.setProperty('--scale', '0.8')
          m0.style.setProperty('--delay', '0s')
          m0.style.setProperty('--mark-color-a', 'var(--neutral)')
          m0.style.setProperty('--mark-color-b', 'var(--pantone-3)')
          m0.style.setProperty('--mark-size', 'clamp(72px, 12vw, 200px)')
        }

        // secondary: position relative to the photo-carousel (left, under it)
        if (marks.length > 1) {
          const m1 = marks[1]
          if (m1) {
            const carousel = document.querySelector('.photo-carousel')
            if (carousel) {
              if (m1.style.display === 'none') m1.style.display = 'inline-block'
              const crect = carousel.getBoundingClientRect()
              // compute offset relative to wrapper center
              const wrapCenterX = rect.left + rect.width / 2
              const wrapCenterY = rect.top + rect.height / 2
              // aim for a point slightly inset from carousel's left edge and just below it
              const insetX = Math.min(36, Math.max(12, crect.width * 0.02))
              const targetX = crect.left + insetX
              const targetY = crect.bottom + Math.min(48, Math.round(crect.height * 0.06))
              const ox1 = Math.round(targetX - wrapCenterX)
              const oy1 = Math.round(targetY - wrapCenterY)
              m1.style.setProperty('--ox', `${ox1}px`)
              m1.style.setProperty('--oy', `${oy1}px`)
            } else {
              // carousel not yet present — hide m1 and retry shortly
              m1.style.display = 'none'
              if (mounted) {
                if (retryId) clearTimeout(retryId)
                retryId = setTimeout(place, 300)
              }
            }
            m1.style.setProperty('--scale', '1.0')
            m1.style.setProperty('--delay', '0.3s')
            m1.style.setProperty('--mark-color-a', 'var(--neutral)')
            m1.style.setProperty('--mark-color-b', 'var(--pantone-1)')
            m1.style.setProperty('--mark-size', 'clamp(120px, 18vw, 300px)')
            // smooth fade-in
            if (m1.style.display !== 'none') {
              m1.style.transition = 'opacity .36s ease'
              m1.style.opacity = '0'
              requestAnimationFrame(() => { m1.style.opacity = '1' })
            }
          }
        }

        // hide any additional marks so 'SK' only appears twice
        marks.forEach((m, i) => {
          if (i > 1) {
            m.style.setProperty('display', 'none')
          }
        })

        return
      }

      // default: fully random
      marks.forEach((m) => {
        const rx = Math.random() * rect.width
        const ry = Math.random() * rect.height
        const ox = Math.round(rx - rect.width / 2)
        const oy = Math.round(ry - rect.height / 2)
        const s = 0.9 + Math.random() * 0.5
        const d = (Math.random() * 2.2).toFixed(2) + 's'
        m.style.setProperty('--ox', `${ox}px`)
        m.style.setProperty('--oy', `${oy}px`)
        m.style.setProperty('--scale', String(s))
        m.style.setProperty('--delay', d)
      })
    }

    place()
    window.addEventListener('resize', place, { passive: true })
    window.addEventListener('scroll', place, { passive: true })
    window.addEventListener('load', place)
    return () => {
      mounted = false
      if (retryId) clearTimeout(retryId)
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place)
      window.removeEventListener('load', place)
    }
  }, [background, count])

    return (
    <section className={cls} aria-hidden="true">
      <div className="crest-inner">
        <div className="crest-graphic" role="img" aria-label="Familienwappen" ref={wrapperRef}>
          {background ? (
            renderMarks()
          ) : (
            <img src="/assets/icons/family-wappen.svg" alt="" className="crest-img" />
          )}
        </div>
        {!background && (
          <div className="crest-text">
            <h2>Familienwappen</h2>
            <p className="crest-sub">Ruhige Stimmung · Dezente Bewegung · Klare Typografie</p>
          </div>
        )}
      </div>
    </section>
  )
}
