import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';

function App() {

  return (
    <div>
      <HeroSection/>
      <ServicesSection />
      <PricingSection/>
    </div>
  )
}

export default App
