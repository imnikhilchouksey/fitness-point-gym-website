import React from 'react';
import servicesSectionVideo from '../assets/servicesSectionVideo.mp4'
import strengthTraining from '../assets/strengthTraining.jpg';
import weightTraining from '../assets/weightTraining.jpg';
import personalTraining from '../assets/personalTrainingImage.jpg';
import CardioImage from '../assets/cardioImage.jpg';

const ServicesSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="relative h-screen w-full overflow-hidden font-sans">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-[center_40%] z-0"
        >
          <source src={servicesSectionVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col px-2 py-8 gap-16 items-center justify-between">
          <div className='text-white text-3xl text-center font-sans md:text-6xl md:mt-10 font-extrabold'>
            <h1>We offer something for everybody</h1>
          </div>
          <div className='flex flex-col md:flex-row md:gap-10 md:mt-40 md:text-center '>
            <div
              className='relative md:w-52 md:h-40 bg-cover bg-center gap-2 mt-2 md:text-2xl text-white text-center p-10 rounded-md flex items-center justify-center font-bold transition transform hover:scale-110'
              style={{ backgroundImage: `url(${CardioImage})` }}
            >
              {/* Black Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0"></div>

              {/* Text Content */}
              <div className="relative z-10">Cardio</div>
            </div>
            <div
              className='relative md:w-52 md:h-40 bg-cover bg-center gap-2 mt-2 md:text-2xl text-white text-center p-10 rounded-md flex items-center justify-center font-bold transition transform hover:scale-110'
              style={{ backgroundImage: `url(${strengthTraining})` }}
            >
              {/* Black Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0"></div>

              {/* Text Content */}
              <div className="relative z-10">Strength Training</div>
            </div>
            <div
              className='relative md:w-52 md:h-40 bg-cover bg-center gap-2 mt-2 md:text-2xl text-white text-center p-10 rounded-md flex items-center justify-center font-bold transition transform hover:scale-110'
              style={{ backgroundImage: `url(${weightTraining})` }}
            >
              {/* Black Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0"></div>

              {/* Text Content */}
              <div className="relative z-10">Weight Training</div>
            </div>
            <div
              className='relative md:w-52 md:h-40 bg-cover bg-center gap-2 mt-2 md:text-2xl text-white text-center p-10 rounded-md flex items-center justify-center font-bold transition transform hover:scale-110'
              style={{ backgroundImage: `url(${personalTraining})` }}
            >
              {/* Black Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-md z-0"></div>

              {/* Text Content */}
              <div className="relative z-10">Personal Training</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
