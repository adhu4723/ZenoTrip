import React, { useContext, useState } from 'react'
import TicketCard from './TicketCard'
import Button from '../common/Button'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaPaypal } from 'react-icons/fa';
import PaymentSuccess from './PaymentSuccess';
import { TicketContext } from '../../context/TicketContext';

function Payment({onBack,onNext}) {
   const [selectedMethod, setSelectedMethod] = useState('paypal');
     const [paymentSuccess, setPaymentSuccess] = useState(false);
       const {makepayment}=useContext(TicketContext)
     

  const handlePayment = () => {
    // Simulate payment success
    makepayment()
    setPaymentSuccess(true);
  }

  if (paymentSuccess) {
    return <PaymentSuccess onNext={onNext} />
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div>
        <div className=" mx-auto ">
      <h2 className="text-lg font-semibold mb-4">Select a payment method</h2>

      {/* PayPal Option */}
      <label className="flex items-center border border-gray-400 rounded-md px-4 py-3 mb-4 cursor-pointer transition-all duration-200 hover:shadow-md">
        <input
          type="radio"
          name="payment"
          value="paypal"
          checked={selectedMethod === 'paypal'}
          onChange={() => setSelectedMethod('paypal')}
          className="form-radio text-blue-600 mr-3"
        />
        <div className="flex-1">
          <p className="font-medium">PayPal</p>
          <p className="text-sm text-gray-500">You will be redirected to the PayPal website after submitting your order</p>
        </div>
        <FaPaypal className="text-2xl text-blue-500" />
      </label>

      {/* Credit Card Option */}
      <label className="block border border-gray-400 rounded-md p-4  shadow-md">
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={() => setSelectedMethod('card')}
            className="form-radio text-orange-600 mr-3"
          />
          <span className="font-semibold ">Pay with Credit Card</span>
          <div className="ml-auto flex space-x-2">
            <FaCcVisa className="text-color text-2xl" />
            <FaCcDiscover className="text-color text-2xl" />
            <FaCcMastercard className="text-color text-2xl" />
            <FaCcAmex className="text-color text-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Card number"
            className="rounded-md px-3 py-2 text-black w-full focus:outline-none"
            defaultValue="1234 5678 9101 3456"
          />
          <input
            type="text"
            placeholder="Expiration Date (MM/YY)"
            className="rounded-md px-3 py-2 text-black w-full focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Card Security Code"
          className="rounded-md px-3 py-2 mt-3 text-black w-full focus:outline-none"
          defaultValue="***"
        />
      </label>
    </div>
    <div className='flex justify-between'>
      <div className='w-[100px] mt-5'>
      <Button label={'Back'} onClick={onBack}/>
      </div>
       <div className='w-fit mt-5'>
      <Button onClick={handlePayment} label={'Make payment'}/>
      </div>
      </div>
      </div>
      <div>
      <TicketCard onClick={onNext}/>
      </div>
      
    </div>
  )
}

export default Payment
