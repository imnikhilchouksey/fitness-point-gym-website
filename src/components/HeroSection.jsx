import React, { useEffect, useState } from 'react';
import bgVideo from '../assets/bg-video-gym.mp4';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const HeroSection = () => {
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
        <div className="relative h-screen w-full overflow-hidden font-sans">

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
                        src="src/assets/fitnessPointLogo.png"
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
                            <li key={i} className="relative group cursor-pointer">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="relative z-30 md:hidden flex flex-col gap-4 items-center text-white bg-black bg-opacity-80 py-4">
                        {['Home', 'Services', 'Pricing', 'Gallery', 'Contact us'].map((item, i) => (
                            <li key={i} className="w-40 text-center font-bold transition transform active:scale-90 text-lg cursor-pointer bg-white text-black px-2 py-1 rounded-md">{item}</li>
                        ))}
                    </ul>
                )}

                {/* Hero Content */}
                <div className="flex flex-col justify-between items-center text-white text-center flex-1 px-4 md:px-0 py-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono mt-44">
                        Welcome to the <span className='bg-yellow-500 px-2 py-1 text-black rounded-md'>Fitness Point</span>
                    </h2>

                    <p className="text-lg md:text-2xl font-light mb-12 italic">{texts[index]}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
