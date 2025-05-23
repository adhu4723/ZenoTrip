// src/pages/TourPurchase.jsx
import React, { useState } from 'react';
import ProgressBar from '../components/tourpurchase/ProgressBar';
import BookingDetails from '../components/tourpurchase/BookingDetails';
import YourDetails from '../components/tourpurchase/YourDetails';
import Payment from '../components/tourpurchase/Payment';

function TourPurchase() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <BookingDetails onNext={() => setCurrentStep(2)} />;
      case 2:
        return <YourDetails onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <Payment onBack={() => setCurrentStep(2)} />;
      default:
        return null;
    }
  };

  return (
    <div className=" mx-auto px-4 py-2">
      <ProgressBar  currentStep={currentStep} />
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
