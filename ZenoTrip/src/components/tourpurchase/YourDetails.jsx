import React from 'react'
import TicketCard from './TicketCard'
import Button from '../common/Button'
import TextInput from '../common/TextInput'

function YourDetails({onNext,onBack}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='space-y-5'>
        <h1 className='text-lg font-bold'>Who shall we send these tickets to?</h1>
        <div>
          <form className='grid grid-cols-1 lg:grid-cols-2 gap-5' action="">
           
            <TextInput label={'Name'} placeholder={'Enter your name'}/>
            <TextInput label={'Surname'} placeholder={'Enter surname'}/>
           
              <TextInput label={'Telephone Number'} placeholder={'Enter your telephone number'}/>
            <TextInput label={'Email Address'} placeholder={'Enter your email address'}/>
          

          </form>
        </div>
        <div className='w-[100px]'>
      <Button label={'Back'} onClick={onBack}/>
      </div>
      </div>
      <div>
      <TicketCard onClick={onNext}/>
      </div>
      
    </div>
  )
}

export default YourDetails
