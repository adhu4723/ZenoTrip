import React from 'react'
import { CalendarDays,UsersRound ,MoveRight  } from 'lucide-react';
import { Link } from 'react-router-dom';


function TourCard({data}) {
  return (
    <div className='w-[300px]  space-y-2'>
        <img className='h-[250px] rounded-2xl' src={data?data.images[0]:"public/images/tour/Rectangle 16.png"} alt="" />
        <h1 className='lg:text-xl text-lg font-semibold'>{data?.packagename||'Lucca Bike Tour'}</h1>
        <p>from <span className='font-semibold text-color lg:text-2xl'>₹{data.adultprice} </span> </p>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center text-color'><CalendarDays size={20}/>EVERY DAY</div>
            <div  className='flex gap-2 text-color items-center'><UsersRound size={20}/>3-10 PP</div>
        </div>
        <p className=' line-clamp-2'>{data.discription}</p>
        <Link to={`/packagedetails/${data.id}`} className='text-color flex gap-2'>Read More <MoveRight/></Link>
      
    </div>
  )
}

export default TourCard
