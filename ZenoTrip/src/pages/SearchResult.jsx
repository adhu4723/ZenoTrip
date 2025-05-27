import React from 'react'
import TourFilter from '../components/home/TourFilter'
import SearchCard from '../components/common/SearchCard'
import { useContext } from 'react'
import { TicketContext } from '../context/TicketContext'
import { FilterContext } from '../context/FilterContext'

function SearchResult() {
        const {bookticket}=useContext(TicketContext)
         const {filteredData}=useContext(FilterContext)
  
  return (
    <div className='flex flex-col justify-center items-center '>
        
        <TourFilter/>
        {filteredData?.length==0?'no data':<SearchCard/>}
         
       

      
    </div>
  )
}

export default SearchResult
