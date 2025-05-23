import React from 'react'
import TicketCard from './TicketCard'
import Button from '../common/Button'

function Payment({onBack}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>
      <Button label={'prev'} onClick={onBack}/>
      </div>
      <div>
      <TicketCard/>
      </div>
      
    </div>
  )
}

export default Payment
