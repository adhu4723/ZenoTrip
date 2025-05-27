import React from 'react'
import Button from '../common/Button'

function Offer() {
  return (
    <div className='bg-[#e0ac69] py-10 grid grid-cols-1 lg:grid-cols-2 relative justify-center'>
        <div className='flex justify-center items-center'>
        <div className='max-w-lg mx-2  bg-orange-100/50 text-center space-y-4 py-8 px-4  rounded-2xl'>
            <h1 className='font-bold text-2xl'>Get Special Offers for <br /> Organizations</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='w-[250px] mx-auto'>
            <Button label={'Contact Us'}/>
            </div>
        </div>
        </div>
        <div className='hidden lg:block'>
            <img width={350} className='absolute bottom-0 right-20' src="/ZenoTrip/images/offerwomen.png" alt="" />
        </div>
      
    </div>
  )
}

export default Offer
