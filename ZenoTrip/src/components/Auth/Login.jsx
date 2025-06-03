import React, { useContext, useEffect, useState } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';
import ForgotPassword from './Forgotpass';
import EmailSent from './EmailSent';
import ResetPassword from './ResetPassword';
import ResetSuccess from './ResetSuccess';
import { useNavigate } from 'react-router-dom';

function Login({ toggle }) {
  const { login, loading, handleresetpass, handlechangepass } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const [showForgot, setShowForgot] = useState(false);
  const [showEmailsent, setShowEmailsent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [token, setToken] = useState('');
  const [resetError, setResetError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  useEffect(() => {
    const href = window.location.href;
    const showResetMatch = href.match(/showreset=([^&?#]+)/);
    if (showResetMatch && showResetMatch[1] === 'true') {
      setShowReset(true);
    }

    const tokenMatch = href.match(/token=([^&?#]+)/);
    if (tokenMatch) {
      setToken(tokenMatch[1]);
    }
  }, []);

  if (showForgot) {
    return (
      <ForgotPassword
        onclick={async (email, setError) => {
          const { success, error } = await handleresetpass(email);
          if (success) {
            setShowForgot(false);
            setShowEmailsent(true);
          } else {
            setError(error);
          }
        }}
        onBack={() => setShowForgot(false)}
      />
    );
  }

  if (showEmailsent) {
    return <EmailSent onBack={() => setShowEmailsent(false)} />;
  }

  if (showReset) {
    return (
         <ResetPassword
      onResetSubmit={async (newPassword) => {
        setResetError(''); // Clear old error
        const { success, error } = await handlechangepass(newPassword, token);
        if (success) {
          setShowReset(false);
          setShowSuccess(true);
        } else {
          setResetError(error); // Show error in ResetPassword
        }
      }}
      onBack={() => setShowReset(false)}
      error={resetError} // Pass error as prop
      loading={loading}  // Optional: Show loader on reset
    />

    );
  }

  if (showSuccess) {
    return <ResetSuccess onBack={() => setShowSuccess(false)} onContinue={() => navigate('/')} />;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Log In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          required
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          type="email"
          label="Email Address"
        />
        <TextInput
          required
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
          type="password"
          label="Password"
        />

        <p
          onClick={() => setShowForgot(true)}
          className="text-sm text-right text-amber-600 cursor-pointer hover:underline"
        >
          Forgotten your password?
        </p>

        <Button loading={loading} label="Log In" />
      </form>

      <p>
        Don't have an account?{' '}
        <button onClick={toggle} className="text-amber-600 font-semibold">
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
