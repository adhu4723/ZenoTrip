import React from 'react'
import { Link } from 'react-router-dom'

function Herosec() {
  return (
    <div className='bg-[url(/ZenoTrip/images/abouthero.png)] -bg-cover bg-center lg:h-[710px] h-[1010px] flex items-center justify-center  text-white -mt-110 lg:-mt-40 p-4 relative'>
       
            <div className='absolute p-6 bottom-10 lg:bottom-20'>
                <div className='text-center mb-4 max-w-4xl space-y-5'>
                    <h1 className=' text-4xl lg:text-5xl pacifico-regular '>Our team cares about your full relax!</h1>
                    <p className='text-xl'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    <Link to={'/packages'} className='px-4 py-2 rounded-2xl border border-white hover:bg-white hover:text-black'>View our Tour Packages</Link>
                </div>
            </div>
        
      
    </div>
  )
}

export default Herosec
