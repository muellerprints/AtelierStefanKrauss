import React from 'react'

export default function PageContainer({ children, pageClass = '', withViewport = false }) {
  const inner = (
    <div className={`container ${pageClass}`.trim()}>
      {children}
    </div>
  )

  if (withViewport) return <div className="page-viewport">{inner}</div>
  return inner
}
