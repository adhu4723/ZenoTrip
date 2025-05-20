import React from 'react';
import {
  Users,
  Calendar,
  Clock,
  Flag,
  Car,
  Globe,
  Search
} from 'lucide-react';

const TourFilter = () => {
  return (
    <div className="bg-white rounded-lg w-full lg:w-fit shadow-sm p-6 ">
     

      <div className="lg:flex lg:flex-wrap grid grid-cols-2 justify-evently lg:flex-row gap-6 md:gap-10 lg:gap-12 ">
        {/* People */}
        <div className="flex items-start gap-2">
          <Users className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Number of people</div>
            <select className="text-sm text-gray-500 focus:outline-none">
              <option>Choose number</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-2 border-l pl-">
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
        <div className="flex items-start gap-2 border-l pl-">
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
        <div className="flex items-start gap-2 border-l pl-">
          <Flag className="text-gray-500 mt-1" size={18} />
          <div>
            <div className="font-medium text-gray-800">Tour</div>
            <select className="text-sm text-gray-500 focus:outline-none">
              <option>Select Tour</option>
              <option>Lucca Tour</option>
              <option>Bike Tour</option>
              <option>Wine Tour</option>
            </select>
          </div>
        </div>

        {/* Transportation */}
        <div className="flex items-start gap-2 border-l pl-">
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

        {/* Search Button */}
        <button className="bg-orange-500 text-white p-3 w-fit rounded-lg hover:bg-orange-600 transition">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default TourFilter;
