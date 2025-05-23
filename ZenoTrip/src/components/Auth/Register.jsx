import React from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

function Register({ toggle }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <form className="space-y-4">
        <TextInput placeholder="Enter your name and surname" label="Name and Surname" />
        <TextInput placeholder="Enter your email address" type="email" label="Email" />
        <TextInput placeholder="Enter your password" type="password" label="Password" />
        <div className="flex gap-2">
          <input type="checkbox" />
          <p>
            I agree with <span className="text-amber-600">Terms</span> and <span className="text-amber-600">Privacy</span>
          </p>
        </div>
        <Button label="Create Account" />
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={toggle} className="text-amber-600 font-semibold">
          Log In
        </button>
      </p>
    </div>
  );
}

export default Register;
