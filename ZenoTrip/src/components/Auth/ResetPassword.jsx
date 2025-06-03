import React, { useState } from 'react';
import { Key, Eye, EyeOff } from 'lucide-react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

function ResetPassword({ onBack, onResetSubmit, loading = false, error = '' }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!password || !confirmPassword) {
      alert('Please fill in both password fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Pass the new password to parent handler (Login.jsx)
    onResetSubmit(password);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-2xl w-full max-w-sm text-center space-y-6 ">
        <div className="flex justify-center">
          <div className="bg-orange-100 p-3 rounded-full">
            <Key className="text-orange-500 w-6 h-6" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Set New Password</h2>
        <p className="text-sm text-gray-500">
          Your new password must be different from previously used passwords.
        </p>

        <div className="space-y-4 text-left">
          <div className="relative">
            <TextInput
              label="New Password"
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-[38px] right-3 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="relative">
            <TextInput
              label="Confirm Password"
              placeholder="Confirm your password"
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="absolute top-[38px] right-3 cursor-pointer text-gray-400"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>
        </div>

        {/* Show API error if any */}
        {error && (
          <p className="text-sm text-red-500 text-left">{error}</p>
        )}

        <Button
          loading={loading}
          label="Reset Password"
          onClick={handleReset}
          disabled={loading}
        />

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

export default ResetPassword;
