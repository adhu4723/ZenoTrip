import React from 'react'
import TicketCard from './TicketCard'
import { Verified } from 'lucide-react'
import Button from '../common/Button'

function PaymentSuccess({onNext}) {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className=' flex flex-col items-center text-color justify-center gap-5'>
               
                <Verified color='orange' size={80}  />
                 <h1 className='text-2xl font-bold uppercase'>Payment Done Successfully</h1>
                 <div className='flex gap-5 items-center text-nowrap'>
                 <Button label={'Download Receipt'} />
                 <Button outlined={true} label={'Share'} />
                 </div>
        </div>
  
      <div>
        <TicketCard  onClick={onNext}/>
        </div>
    </div>
  )
}

export default PaymentSuccess
