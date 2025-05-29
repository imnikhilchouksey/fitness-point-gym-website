import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-gray-900 h-[15vh] px-2 py-1 flex flex-col justify-center items-center text-white font-mono'>
      <h1 className='px-2 py-2 text-center text-sm md:text-lg'>Designed and developed by Nikhil Chouksey.</h1>
      <div className='flex flex-row gap-4 text-2xl md:text-3xl'>
        <a href="https://www.instagram.com/nikhil_chouksey___/"><FaInstagram /></a>
        <a href="mailto:imnikhilchouksey@gmail.com"><MdOutlineMail /></a>
        <a href="https://www.linkedin.com/in/nikhil-chouksey-8a28ba248/"><AiOutlineLinkedin /></a>
      </div>
    </div>
  )
}

export default Footer;