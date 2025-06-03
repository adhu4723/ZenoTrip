import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Register({ toggle }) {
    const { register ,loading} = useContext(AuthContext); 
    const [formData, setFormData] = useState({ name:'' ,email: '',password:'' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    register(formData)
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput required={true} onChange={handleChange} name={"name"} placeholder="Enter your name and surname" label="Name and Surname" />
        <TextInput required={true} onChange={handleChange} name={"email"} placeholder="Enter your email address" type="email" label="Email" />
        <TextInput required={true} onChange={handleChange} name={"password"} placeholder="Enter your password" type="password" label="Password" />
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
