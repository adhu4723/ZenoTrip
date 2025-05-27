import React, { useRef, useEffect } from 'react';
import TourCard from '../common/TourCard';
import ScrollHeader from '../common/ScrollHeader';
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const container = scrollContainerRef.current;
  //     if (!container) return;

  //     const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //     if (container.scrollLeft + container.clientWidth >= maxScrollLeft - 10) {
  //       container.scrollTo({ left: 0, behavior: 'auto' });
  //     } else {
  //       container.scrollBy({ left: 340, behavior: 'smooth' });
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='lg:px-10 px-4'>
      <ScrollHeader
        title='Explore Our Popular Destinantions'
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      />
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
