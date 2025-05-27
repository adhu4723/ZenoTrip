import React from 'react'
import { Tourdata } from '../assets/data/TourData'
import TourCard from '../components/common/TourCard'

function TourPackages() {
  return (
    <div className='px-5'>
        <h1 className='text-2xl font-bold text-center mb-4'>Tour Packages</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-fit mx-auto'>
            {Tourdata.map(items=>(
                <TourCard data={items} />
            ))}
        </div>
      
    </div>
  )
}

export default TourPackages
