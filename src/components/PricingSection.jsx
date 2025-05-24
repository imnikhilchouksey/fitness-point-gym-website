import React from 'react'
import pricingImage from '../assets/pricingImage.jpg'
const PricingSection = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden font-sans bg-cover' style={{backgroundImage:`url(${pricingImage})`}}>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0  '></div>
      <div className='flex flex-col absolute z-20 text-white text-xl md:text-4xl items-center w-[80%] mt-10 left-1/2 transform -translate-x-1/2'>
        <h1 className='text-center font-bold'>Crushing your health and fitness goals starts here...</h1>
      </div>
    </div>
  )
}

export default PricingSection;