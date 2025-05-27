import React, { useRef } from 'react';
import ScrollHeader from '../common/ScrollHeader';

const testimonialsData = [
  {
    name: 'Lyod Gomez',
    image: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=',
    review:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...',
  },
  {
    name: 'Emma Stone',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Absolutely love their service! Everything was smooth and comfortable. Highly recommended!',
  },
  {
    name: 'John Carter',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Had the most memorable trip thanks to ZenoTrip! The guides were professional and very friendly.',
  },
  {
    name: 'Sophia Lee',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review:
      'A wonderful travel experience from start to finish. Can’t wait to book again!',
  },
  {
    name: 'Daniel Craig',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review:
      'The best travel company I’ve used. Great value and outstanding support!',
  },
  {
    name: 'David brutt',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    review:
      'The best travel company I’ve used. Great value and outstanding support!',
  },
];




function Testimonials() {
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
  return (
    <div className="py-10 px-5">
      <ScrollHeader 
       onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      title="Happy Customers Say" />
      <div  ref={scrollContainerRef} className="flex gap-6 overflow-auto no-scrollbar scroll-smooth py-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-md flex flex-col gap-4 shadow-lg px-6 py-4 bg-white rounded-lg"
          >
            <div className="flex flex-col gap-2 items-center text-center">
              <img
                className="rounded-full h-[70px] w-[70px] object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="font-semibold">{testimonial.name}</p>
            </div>
            <div className="relative text-sm text-gray-600">
              <img
                src="/ZenoTrip/icon/Asset 16 1.png"
                alt="quote"
                className="mb-2 w-6 h-6"
              />
              <p className="leading-relaxed">{testimonial.review}</p>
              <img
                className="absolute right-0 bottom-0 w-6 h-6"
                src="/ZenoTrip/icon/Asset 16 1.png"
                alt="quote end"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
