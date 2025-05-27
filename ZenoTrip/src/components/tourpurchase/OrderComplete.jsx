import React from 'react'
import { Check } from 'lucide-react'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'

function OrderComplete() {
    const navigate=useNavigate()
    return (
        <div className='text-center space-y-4'>
            <div className='p-3 rounded-full text-white bg-color w-fit mx-auto'><Check /></div>
            <div>
                <h1 className='font-semibold text-2xl'>Your Order is complete!</h1>
                <p>You will be receiving a confirmation email with order details.</p>
            </div>

            <div className='w-[300px] mx-auto'>
                <Button onClick={()=>navigate('/')} label={'Go to the Home Page'} />
            </div>
        </div>
    )
}

export default OrderComplete
