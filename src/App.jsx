import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import GallerySection from './components/GallerySection';

function App() {

  return (
    <div>
      <HeroSection/>
      <ServicesSection />
      <PricingSection/>
      <GallerySection/>
    </div>
  )
}

export default App
