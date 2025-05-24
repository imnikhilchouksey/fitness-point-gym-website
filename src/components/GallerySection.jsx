import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';

const GallerySection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const images = [img1, img2, img3, img4, img5];
  const duplicatedImages = [...images, ...images,...images,...images,...images];

  useEffect(() => {
    const container = scrollRef.current;
    let speed = window.innerWidth > 768 ? 1.5 : 0.5;
    let rafId;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2 ) {
          container.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <div
      ref={scrollRef}
      className="relative w-full overflow-hidden bg-black no-scrollbar md:h-[40vh] items-center flex flex-row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-4 py-5 px-4 whitespace-nowrap">
        {duplicatedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-64 h-40 object-cover rounded-lg inline-block transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
