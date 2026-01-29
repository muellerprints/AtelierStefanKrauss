import React from 'react'

export function PrimaryButton({children, ...props}){
  return <button className="btn btn-primary" {...props}>{children}</button>
}

export function SecondaryButton({children, ...props}){
  return <button className="btn btn-secondary" {...props}>{children}</button>
}

export function AccentButton({children, ...props}){
  return <button className="btn btn-accent" {...props}>{children}</button>
}

export default function ButtonsDemo(){
  return (
    <div style={{display:'flex',gap:12,alignItems:'center'}}>
      <PrimaryButton>Kontakt</PrimaryButton>
      <SecondaryButton>Mehr erfahren</SecondaryButton>
      <AccentButton>Galerie</AccentButton>
    </div>
  )
}
