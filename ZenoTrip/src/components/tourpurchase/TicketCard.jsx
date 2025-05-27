import React, { useContext, useEffect } from 'react'
import Button from '../common/Button'
import {TicketContext } from '../../context/TicketContext'
import { Link } from 'react-router-dom';


function TicketCard({onClick}) {
  const {ticket}=useContext(TicketContext)
  console.log(ticket);
 
  
  return (
    <div className='border border-gray-300 max-w-xl px-4 py-2 space-y-4 mx-auto rounded-2xl'>
        <h1 className='font-bold border-b-2 border-amber-600 text-amber-600 p-3 text-center'>Your Tickets Overview</h1>
        <Link to={`/packagedetails/${ticket.tourdetails?.id}`} className='flex gap-5'>
            <img width={150} src={ticket.tourdetails?.images[0]||''} alt="" />
            <div>
            <p className='text-color font-bold text-lg uppercase  lg:text-2xl'>{ticket.tourdetails?.packagename||''}</p>
            <p>{ticket?.selectedDate}</p>
            <p>{ticket?.selectedTime}</p>

            </div>
        </Link>
        <div className='flex flex-col gap-5'>
           <div className='flex justify-between gap-6'> <div className='space-x-3'> <span className='bg-gray-300 px-2 rounded-full '>{ticket?.adult||'0'}</span> <span>Adult (18+) (₹{ticket.tourdetails?.adultprice})</span> </div>   <span>₹{ticket?.adult*ticket.tourdetails?.adultprice||'0'}</span></div>
           <div className='flex justify-between gap-6'> <div className='space-x-3'> <span className='bg-gray-300 px-2 rounded-full '>{ticket?.child||'0'}</span> <span>child (6-17) (₹{ticket.tourdetails?.childprice})</span> </div>   <span>₹{ticket?.child*ticket.tourdetails?.childprice||'0'}</span></div>
           <div className='flex justify-between gap-6'> <div className='space-x-3'> <span className='bg-gray-300 px-2 rounded-full '>{ticket?.infant||'0'}</span> <span>Infant (0-5) (₹0.00)</span> </div>   <span>{}</span></div>
           <p className='flex justify-between font-bold'> <span>Total Price:</span> <span>₹{ticket?.totalPrice||'0'}</span></p>
           <Button onClick={onClick} label={'Go to the Next Step'}/>
        </div>
      
    </div>
  )
}

export default TicketCard
