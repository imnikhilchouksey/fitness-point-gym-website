import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import App from '../App'

const Preloader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    if (document.readyState == "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      window.addEventListener("DOMContentLoaded", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.removeEventListener("DOMContentLoaded", finishLoading);
    }

  }, []);

  if (isLoading){
    return (
      <div
      className='bg-black text-white flex items-center justify-center h-screen font-bold text-3xl md:text-4xl text-center '>
        <motion.h1
        initial={{scale:0.5}}
        animate={{scale:1}}
        transition={{duration:3}}
        >Preparing gains , please wait...</motion.h1>
      </div>
    )
  } else { 
    return <App/>
  }
}

export default Preloader