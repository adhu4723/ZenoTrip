import React, { useContext } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';

function Login({ toggle }) {
    const {login}=useContext(AuthContext)
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Log In</h1>
      <form onSubmit={login} className="space-y-4">
        <TextInput placeholder="Enter your email" type="email" label="Email Address" />
        <TextInput placeholder="Enter your password" type="password" label="Password" />
        <Button  label="Log In" />
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
