import React from 'react'
import pricingImage from '../assets/pricingImage.jpg'
const PricingSection = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden font-sans bg-cover' style={{ backgroundImage: `url(${pricingImage})` }}>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0  '></div>
      <div className='flex flex-col absolute z-20 text-yellow-500 text-xl md:text-4xl items-center w-[80%] mt-10 left-1/2 transform -translate-x-1/2 bg-transparent'>
        <h1 className='text-center font-bold'>Crushing your health and fitness goals starts here...</h1>
        <div className='flex flex-col md:flex-row gap-10 px-4 py-2 mx-2 my-2 mt-10 ml-2 text-black justify-between'>
          <div className='w-60 h-36 font-bold p-2 md:w-60 md:h-80 bg-black bg-opacity-40 text-white  rounded-lg shadow-lg border border-gray-300 text-center font-mono transition transform hover:scale-110'> 
            <h1>1 month plan</h1>
            <span className='text-xl bg-yellow-500 text-black px-2 py-1 border-black rounded-xl'>₹500</span>
            <div className='flex flex-col text-sm mt-2 md:mt-10 text-left ml-2 mr-2'>
              <span>✅Gym access</span>
              <span>✅Personal Training</span>
            </div>
          </div>
          <div className='w-60 h-36 font-bold p-2 md:w-60 md:h-80 bg-black bg-opacity-40 text-white rounded-lg shadow-lg border border-gray-300 text-center font-mono transition transform hover:scale-110'>
            <h1>3 month plan</h1>
            <span className='text-xl bg-yellow-500 text-black px-2 py-1 border-black rounded-xl'>₹1200</span>
            <div className='flex flex-col text-sm mt-1 md:mt-10 text-left ml-2 mr-2'>
              <span>✅Gym access</span>
              <span>✅Personal Training</span>
              <span>✅personalized Diet plan</span>
            </div>
          </div>
          <div className='realtive w-60 h-36 font-bold p-2 md:w-60 md:h-80 rounded-lg bg-black bg-opacity-40 text-white  shadow-lg border border-gray-300 text-center font-mono transition transform hover:scale-110'>
            
            <h1>6 month plan</h1>
            <span className='text-xl bg-yellow-500 text-black px-2 py-1 border-black rounded-xl'>₹2200</span>
            <div className='flex flex-col text-sm mt-1 md:mt-10 text-left ml-2 mr-2'>
              <span>✅Gym access</span>
              <span>✅Personal Training</span>
              <span>✅personalized Diet plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection;