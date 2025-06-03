import React, { useContext, useState } from 'react';
import { Key } from 'lucide-react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';

function ForgotPassword({ onBack, onclick }) {
  const { loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetClick = () => {
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    setError('');
    if (onclick) {
      onclick(email, setError); // Pass control to parent
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-2xl w-full max-w-sm text-center space-y-6 ">
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
        <div className="text-left space-y-1">
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>

        {/* Reset Button */}
        <Button loading={loading} onClick={handleResetClick} label="Reset Password" />

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
