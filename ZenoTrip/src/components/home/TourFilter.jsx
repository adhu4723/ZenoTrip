import React, { useContext, useState } from 'react';
import {
  Users,
  Calendar,
  Clock,
  Flag,
  Car,
  Globe,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from '../../context/FilterContext';

const TourFilter = () => {
  const navigate=useNavigate()
  const [tourName,setTourName]=useState('')
  const {handlesearchData}=useContext(FilterContext)

  const handlesearch=()=>{
handlesearchData(tourName)
 navigate('/search')

  }
  return (
    <div className="bg-white rounded-lg w-full lg:w-fit shadow-sm p-4 ">
     

      <div className="lg:flex  lg:flex-wrap grid grid-cols-2 justify-evently lg:flex-row gap-6 md:gap-10 lg:gap-12 ">
        {/* People */}
        <div className="flex  items-start gap-2">
          <Users className="text-gray-500 mt-1" size={18} />
          <div className=''>
            <div className="font-medium text-gray-800">Number of people</div>
            <select className="text-sm text-gray-500  focus:outline-none">
              <option>Choose number</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-2  pl-">
          <Calendar className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Date</div>
            <input
              type="date"
              className="text-sm text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-2  pl-">
          <Clock className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Time</div>
            <select className="text-sm text-gray-500 focus:outline-none">
              <option>Choose Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>

        {/* Tour */}
        <div className="flex items-start gap-2  pl-">
          <Flag className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Tour</div>
            <select  onClick={(e)=>setTourName(e.target.value)} className="text-sm text-gray-500 focus:outline-none">
              <option>Select Tour</option>
              <option>Lucca Bike Tour</option>
              <option>Wine tasting In Tuscany</option>
              <option>Cinque Terre Tour</option>
              <option>Siena and Surroundings</option>
              <option >Tour of the Lucca Hills</option>
              <option >Gardaland, Verona</option>
              <option >Pisa & Lucca</option>
              <option >Florence</option>
            </select>
          </div>
        </div>

        {/* Transportation */}
        <div className="flex items-start gap-2  pl-">
          <Car className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Transportation</div>
            <select className="text-sm text-gray-500 focus:outline-none">
              <option>Select Transportation</option>
              <option>Car</option>
              <option>Bus</option>
              <option>Rickshaw</option>
            </select>
          </div>
        </div>
         <br className='block lg:hidden' />
        {/* Search Button */}
        <button onClick={handlesearch} className="bg-orange-500 text-white p-3 w-fit rounded-lg hover:bg-orange-600 transition">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default TourFilter;
