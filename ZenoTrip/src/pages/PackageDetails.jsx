// pages/PackageDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tourdata } from '../assets/data/TourData';
import ImageGallery from '../components/packagedetails/ImageGallery';
import DateTimePicker from '../components/packagedetails/DateTimePicker';
import Testimonials from '../components/home/Testimonials';
import MoreDetails from '../components/packagedetails/MoreDetails';
import Gallery from '../components/packagedetails/Gallery';

function PackageDetails() {
  const { id } = useParams();
  const tourdetails = Tourdata.find(item => item.id == id);

  return (
    <>
    <div className='px-4 space-y-10'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
      <ImageGallery images={tourdetails.images} />

      <div className='space-y-2'>
        {/* Add more tour details here if needed */}
        <h2 className="text-4xl font-bold">{tourdetails.packagename}</h2>
        <p>From <span className='text-color font-bold text-2xl'>₹{tourdetails.adultprice}/-</span></p>
        <p className="mt-2">{tourdetails.discription}</p>
        <DateTimePicker tourdetails={tourdetails} />
      </div>
    </div>
   
    <MoreDetails/>
    <Gallery/>
    <Testimonials/>
    
    </div>
    </>
  );
}

export default PackageDetails;
