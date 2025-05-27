import React from 'react'

function Aboutus() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
        <div>
            <img className='mx-auto hidden lg:block' width={300} src="/ZenoTrip/images/Group 3.png" alt="" />
        </div>
        <div className='flex justify-center items-center'>
            <div className='space-y-2'>
            <p className='text-sm'>WELCOME TO OUR SITE!</p>
            <h1 className='text-2xl font-semibold'>We are the best company for your visit</h1>
            <p>After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>
            <div className='flex flex-wrap gap-15 justify-center lg:justify-start'>
                <div className='flex flex-col'>
                    <p className='text-2xl text-color'>20+</p>
                    <p>Years <br />Experience</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl text-color'>100+</p>
                    <p>Happy <br />Customer</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl text-color'>15+</p>
                    <p>Choice  <br />of Services</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl text-color'>10+</p>
                    <p>Professional  <br />Guides</p>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Aboutus
