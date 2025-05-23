import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TourCard from '../common/TourCard';
import { Tourdata } from '../../assets/data/TourData';

function PopularTour() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -340,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 340,
      behavior: 'smooth',
    });
  };

  // 🔁 Infinite auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // If we're near the end, jump to start
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        container.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='lg:px-10 px-2'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='font-bold text-lg lg:text-2xl'>Explore Our Popular Destinantions</h1>
        <div className='flex gap-5'>
          <button
            className='bg-color w-fit p-2 rounded-full text-white'
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </button>
          <button
            className='bg-color w-fit p-2 rounded-full text-white'
            onClick={scrollRight}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        className='flex gap-5 overflow-auto scroll-smooth no-scrollbar'
        ref={scrollContainerRef}
      >
        {Tourdata.map((items, index) => (
          <div key={index}>
            <TourCard data={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularTour;
