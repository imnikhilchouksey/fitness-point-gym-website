import React from 'react';
import bgVideo from '../assets/bg-video-gym.mp4';

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden font-sans">

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-[center_20%] z-0"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

            <div className="relative z-20 flex flex-col h-full">


                <nav className="h-[10%] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-48 px-4 md:px-8 py-4 text-white">
                    <img
                        src="src\assets\fitnessPointLogo.png" 
                        alt="Fitness Point Logo"
                        className="w-48 h-auto object-contain"
                    />


                    <ul className="w-full md:w-[80%] flex flex-col md:flex-row justify-around md:justify-between items-center cursor-pointer text-lg md:text-base gap-4 md:gap-0">
                        {['Home', 'Services', 'Pricing', 'About us', 'Contact us'].map((item, i) => (
                            <li
                                key={i}
                                className="relative group text-white"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </nav>


                <div className="flex flex-col items-center justify-center text-white text-center flex-1 px-4 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to the Fitness Point</h2>
                    <p className="text-lg md:text-2xl">The best gym in Lalburra</p>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
