import React from 'react'
import Hero from '../components/home/Hero'
import PopularTour from '../components/home/PopularTour'
import Aboutus from '../components/home/Aboutus'
import Offer from '../components/home/Offer'
import Testimonials from '../components/home/Testimonials'
import PopularPackages from '../components/home/PopularPackages'
import Bookbike from '../components/home/Bookbike'
import SearchCard from '../components/common/SearchCard'

function Home() {
  return (
    <div className='space-y-25'>
      <Hero />
      <PopularTour />
      <Aboutus />
      <Offer />
      <PopularPackages />
      <Bookbike />
     

      <div className=' px-5 lg:px-5'>
        <Testimonials />
      </div>
    </div>
  )
}

export default Home
