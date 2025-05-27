import React from 'react';
import { Key } from 'lucide-react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

function ForgotPassword({ onBack ,onclick}) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl p- w-full max-w-sm text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-orange-100 p-3 rounded-full">
            <Key className="text-orange-500 w-6 h-6" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
          <p className="text-sm text-gray-500 mt-1">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {/* Email Input */}
        <div className="text-left">
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
          />
        </div>

        {/* Reset Button */}
        <Button onClick={onclick}  label="Reset Password" />

        {/* Back to Login */}
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:underline flex items-center justify-center gap-1 mx-auto"
        >
          <span className="text-gray-400">←</span> Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
