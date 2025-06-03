import React, { useContext } from 'react';
import { Mail } from 'lucide-react'; // Optional: Use your own icon
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';

function EmailSent({  onBack, onResend }) {
  const {email}=useContext(AuthContext)
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl  w-full text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-orange-100 p-3 rounded-full">
            <Mail className="text-orange-500 w-6 h-6" />
          </div>
        </div>

        {/* Title & Message */}
        <h2 className="text-2xl font-bold text-gray-800">Check your email</h2>
        <p className="text-sm text-gray-500">
          We sent a password reset link to <br />
          <span className="text-gray-800 font-medium">{email}</span>
        </p>

        {/* Open Email App Button */}
        <Button label={'Open email app'}
          onClick={() => window.open('https://mail.google.com', '_blank')} // or custom action
        />
          
       

        {/* Resend Option */}
        <p className="text-sm text-gray-500">
          Didn’t receive the email?{' '}
          <button
            className="text-orange-600 font-semibold hover:underline"
            onClick={onResend}
          >
            Click to resend
          </button>
        </p>

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

export default EmailSent;
