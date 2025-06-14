import React, { useEffect, useState } from 'react';
import bgVideo from '../assets/bg-video-gym-.mp4';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import fitnessPointlogo from '../assets/fitnessPointLogo.png';
const HeroSection = ({ id }) => {

    const [isOpen, setIsOpen] = useState(false);

    const texts = ['The best gym of lalburra.', 'Start Your Journey. Change Your Life.', 'No Excuses. Just Results.', 'Earn It. Own It.', 'Lift. Sweat. Repeat.', 'Unleash the Best Version of You.', 'Stronger Every Day.', 'Fitness is Not a Destination, It’s a Way of Life.', 'Transform Pain Into Power.', 'Push Your Limits. Redefine Yourself.']

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % texts.length)
        }, 3000)

        return () => clearInterval(interval)
    }, []);

    return (
        <section id={id}>
            <div className="relative h-screen w-full overflow-hidden font-sans bg-black ">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-[center_20%] z-0"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>

                {/* Fade overlay at bottom of hero video */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-20"></div>


                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col h-full">

                    {/* Navbar */}
                    <nav className="relative z-30 h-[10%] flex justify-between items-center px-4 md:px-8 py-4 text-white">
                        {/* Logo */}
                        <img
                            src={fitnessPointlogo}
                            alt="Fitness Point Logo"
                            className="w-32 h-auto object-contain "
                        />

                        {/* Hamburger Button for Mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden focus:outline-none text-white cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
                        </button>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-8 items-center text-lg">
                            {['Home', 'Services', 'Pricing', 'Gallery', 'Contact us'].map((item, i) => (
                                <li key={i} className="relative group cursor-pointer" >
                                    <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>
                                        {item}
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" href="${item}"></span>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <ul className="relative z-30 md:hidden flex flex-col gap-4 items-center text-white bg-black bg-opacity-80 py-4">
                            {['Home', 'Services', 'Pricing', 'Gallery', 'Contact us'].map((item, i) => (
                                <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}><li key={i} className="w-32 text-center font-bold transition transform active:scale-90 text-lg cursor-pointer bg-white text-black rounded-md"
                                onClick={()=>setIsOpen(false)}> 
                                    {item}
                                </li></a>
                            ))}
                        </ul>
                    )}

                    {/* Hero Content */}
                    <div className="flex flex-col justify-between items-center text-white text-center flex-1 px-4 md:px-0 py-10">
                        <h2 className="text-4xl md:text-6xl font-extralight font-sans mt-44">
                            Welcome to the <span className='px-2 py-2 bg-gradient-to-r from-yellow-500 to-yellow-100  font-thin text-transparent inline-block bg-clip-text rounded-md'>Fitness Point</span>
                        </h2>

                        <p className="text-lg md:text-2xl font-light mb-12 italic">{texts[index]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
