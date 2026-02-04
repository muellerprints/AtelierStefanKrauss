import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Atelier from './pages/Atelier'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Directions from './pages/Directions'
import OpeningHours from './pages/OpeningHours'
import Impressum from './pages/Impressum'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Payment from './pages/Payment'
import Shipping from './pages/Shipping'

export default function App(){
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <main id="content" tabIndex="-1" role="main">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/atelier" element={<Atelier/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/directions" element={<Directions/>} />
        <Route path="/opening-hours" element={<OpeningHours/>} />
        <Route path="/impressum" element={<Impressum/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/shipping" element={<Shipping/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
