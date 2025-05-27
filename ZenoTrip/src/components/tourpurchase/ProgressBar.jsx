// src/components/tourpurchase/ProgressBar.jsx
import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  { id: 1, label: 'Booking Details' },
  { id: 2, label: 'Your Details' },
  { id: 3, label: 'Payment' },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center max-w-3xl mx-auto justify-between py- w-full ">
  {steps.map((step, index) => {
    const isCompleted = step.id < currentStep;
    const isActive = step.id === currentStep;

    return (
      <React.Fragment key={step.id}>
        {/* Step circle and label */}
        <div className="flex flex-col items-center relative z-10">
          <div
            className={`w-8 h-8 border-2 rounded-full flex items-center justify-center text-sm font-bold
            ${isActive || isCompleted ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-gray-400'}
            transition-colors duration-1000`}
          >
            {isCompleted ? <Check className="w-4 h-4" /> : step.id}
          </div>
          <div
            className={`mt-2 text-sm font-medium
            ${isActive || isCompleted ? 'text-orange-500' : 'text-gray-500'}
            transition-colors duration-300`}
          >
            {step.label}
          </div>
        </div>

        {/* Connector line to next step */}
        {index !== steps.length - 1 && (
          <div className="flex-1 h-1 bg-gray-200 relative mx-2">
            <div
              className={`absolute top-0 left-0 h-full transition-all duration-1000 ${
                currentStep > step.id ? 'bg-orange-500 w-full' : 'w-0'
              }`}
            />
          </div>
        )}
      </React.Fragment>
    );
  })}
</div>

  );
};

export default ProgressBar;
