import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';

function ResetSuccess({ onContinue, onBack }) {
  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-2xl  w-full  text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-orange-100 p-3 rounded-full">
            <CheckCircle className="text-orange-500 w-6 h-6" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold text-gray-800">Password Reset</h2>
        <p className="text-sm text-gray-500">
          Your password has been successfully reset.<br />
          Click below to login in magically.
        </p>

        {/* Continue Button */}
        <Button label="Continue" onClick={onContinue} />

        {/* Back to Login */}
        <button
          onClick={onBack}
          className="text-sm text-gray-400 hover:underline flex items-center justify-center gap-1 mx-auto"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}

export default ResetSuccess;
