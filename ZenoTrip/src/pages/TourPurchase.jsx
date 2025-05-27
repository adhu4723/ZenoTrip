// src/pages/TourPurchase.jsx
import React, { useContext, useEffect, useState } from 'react';
import ProgressBar from '../components/tourpurchase/ProgressBar';
import BookingDetails from '../components/tourpurchase/BookingDetails';
import YourDetails from '../components/tourpurchase/YourDetails';
import Payment from '../components/tourpurchase/Payment';
import { TicketContext } from '../context/TicketContext';
import OrderComplete from '../components/tourpurchase/OrderComplete';

function TourPurchase() {
  const [currentStep, setCurrentStep] = useState(1);
  const {adultCount,childCount,ticket}=useContext(TicketContext)

  
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [currentStep])

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <BookingDetails onNext={() =>{ if(adultCount||childCount!=0){setCurrentStep(2)}else{alert('Atleast 1 person required')}}} />;
      case 2:
        return <YourDetails onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <Payment onNext={() =>{ticket.ispayed? setCurrentStep(4):alert('make payment')}} onBack={() => setCurrentStep(2)} />;
         case 4:
        return <OrderComplete />;
      default:
        return null;
    }
  };

 return (
  <div className="mx-auto px-4 py-2">
    {currentStep !== 4 && <ProgressBar currentStep={currentStep} />}
    <div className="mt-6 relative min-h-[300px] overflow-hidden">
      <div
        key={currentStep}
        className="transition-all duration-500 ease-in-out transform"
      >
        {renderStepComponent()}
      </div>
    </div>
  </div>
);
}

export default TourPurchase;
