import React from 'react'
import {
  FaUsers,
  FaHourglassHalf,
  FaMapMarkedAlt,
  FaUserTie,
  FaLanguage,
  FaTicketAlt,
  FaBus
} from 'react-icons/fa';

const tourDetails = [
  {
    icon: <FaUsers className="text-orange-500 text-lg" />,
    label: 'Number of group:',
    value: '15-30',
  },
  {
    icon: <FaHourglassHalf className="text-orange-500 text-lg" />,
    label: 'Duration:',
    value: '15 hours and 45 minutes',
  },
  {
    icon: <FaMapMarkedAlt className="text-orange-500 text-lg" />,
    label: 'Departuring and arriving areas:',
    value: 'Lucca',
  },
  {
    icon: <FaUserTie className="text-orange-500 text-lg" />,
    label: 'Guide service:',
    value: 'Included',
  },
  {
    icon: <FaLanguage className="text-orange-500 text-lg" />,
    label: 'Language:',
    value: 'English, Italian',
  },
  {
    icon: <FaTicketAlt className="text-orange-500 text-lg" />,
    label: 'Entry Fees:',
    value: 'lorem ipsum',
  },
  {
    icon: <FaBus className="text-orange-500 text-lg" />,
    label: 'Entry Transportation:',
    value: 'Bus',
  },
];

function MoreDetails() {
  return (
    <div className='space-y-5 mt-10'>
      <h1 className='font-bold text-2xl'>Details</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       <div className="space-y-4 grid grid-cols-1  lg:grid-cols-1 ">
      {tourDetails.map((item, index) => (
        <div key={index} className="flex items-center gap-3 text-lg">
          <span className="">{item.icon}</span>
          <p>
            <span className="font-semibold">{item.label}</span>{' '}
            <span className="text-gray-700">{item.value}</span>
          </p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MoreDetails
