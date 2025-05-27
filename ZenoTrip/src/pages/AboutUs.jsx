import React from 'react'
import Herosec from '../components/About/Herosec'
import Aboutus from '../components/home/Aboutus'
import Advantages from '../components/About/Advantages'
import Testimonials from '../components/home/Testimonials'

function AboutUs() {
  return (
    <div className='space-y-5'>
      <Herosec/>
      <Aboutus/>
      <Advantages/>
      <Testimonials/>
    </div>
  )
}

export default AboutUs
