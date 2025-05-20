import React from 'react'
import TourFilter from './TourFilter'

function Hero() {
    return (
        <div style={{ backgroundImage: 'url(public/images/heroimg.png)' }} className='bg-cover bg-center lg:h-[710px] h-[1010px] flex items-center justify-center  text-white -mt-110 lg:-mt-40 p-4 relative'>
            <div className='absolute p-6 top-1/2'>
                <div className='text-center mb-4'>
                    <h1 className=' text-4xl lg:text-5xl pacifico-regular mb-6'>Enjoy in the best way!</h1>
                    <p className='text-xl'>Enjoy our services for your trip anytime</p>
                </div>
                <TourFilter />
            </div>
        </div>
    )
}

export default Hero
