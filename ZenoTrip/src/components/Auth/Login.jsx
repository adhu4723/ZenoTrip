import React, { useContext, useState } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';
import ForgotPassword from './Forgotpass';
import EmailSent from './EmailSent';
import ResetPassword from './ResetPassword';
import { useLocation, useNavigate } from 'react-router-dom';
import ResetSuccess from './ResetSuccess';

function Login({ toggle }) {
  const { login } = useContext(AuthContext);
  const [showForgot, setShowForgot] = useState(false);
  const [showEmailsent,setshowEmailsent]=useState(false)
  const [showsuccess,setshowsuccess]=useState(false)
  const navigate=useNavigate()


    const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  // const query = queryParams.get('q'); // "react"
  const query = queryParams.get('showreset'); // "2"
    const[showreset,setshowreset]=useState(query)
  console.log(showreset);
  


  if (showForgot) {
    return <ForgotPassword onclick={()=>{setshowEmailsent(true),setShowForgot(false)}} onBack={() => setShowForgot(false)} />;
  }
  if (showEmailsent) {
    return <EmailSent onBack={()=>setshowEmailsent(false)} />
  }
   if (showreset) {
    return <ResetPassword onclick={()=>{setshowsuccess(true),setshowreset(false)}} onBack={()=>setshowreset(false)} />
  }
  if (showsuccess) {

    return <ResetSuccess onBack={()=>setshowsuccess(false)}  onContinue={()=>navigate('/')}/>
    
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Log In</h1>
      <form onSubmit={login} className="space-y-4">
        <TextInput placeholder="Enter your email" type="email" label="Email Address" />
        <TextInput placeholder="Enter your password" type="password" label="Password" />
        
        {/* Forgot Password Link */}
        <p
          onClick={() => setShowForgot(true)}
          className="text-sm text-right text-amber-600 cursor-pointer hover:underline"
        >
          Forgotten your password?
        </p>
        
        <Button label="Log In" />
      </form>

      <p>
        Don't have an account?{' '}
        <button onClick={toggle} className="text-amber-600 font-semibold">
          Register
        </button>
      </p>
      {/* <ResetPassword/> */}
    </div>
  );
}

export default Login;
