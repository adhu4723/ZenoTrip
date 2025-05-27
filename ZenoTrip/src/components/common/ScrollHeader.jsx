// components/common/ScrollHeader.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ScrollHeader({ title, onScrollLeft, onScrollRight }) {
  return (
    <div className='flex justify-between items-center mb-10'>
      <h1 className='font-bold text-lg lg:text-2xl'>{title}</h1>
      <div className='lg:flex gap-5 hidden'>
        <button
          className='bg-amber-600 hover:text-amber-600 w-fit p-2 rounded-full border text-white hover:border-amber-700 hover:bg-white'
          onClick={onScrollLeft}
        >
          <ChevronLeft />
        </button>
        <button
          className='bg-amber-600 w-fit p-2 rounded-full text-white border hover:text-amber-600 hover:bg-white hover:border-amber-700 '
          onClick={onScrollRight}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ScrollHeader;
