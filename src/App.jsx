import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import GallerySection from './components/GallerySection';
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <HeroSection id="Home"/>
      <ServicesSection id="services" />
      <PricingSection id="pricing"/>
      <GallerySection id="gallery"/>
      <ContactUsSection id="contactus"/>
      <Footer/>
    </div>
  )
}

export default App
