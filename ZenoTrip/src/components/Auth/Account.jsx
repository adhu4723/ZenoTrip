import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import { X } from 'lucide-react';

function Account({ onClose }) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="bg-black/70 h-screen flex justify-center items-center fixed w-full z-50 top-0">
      <div className="bg-white rounded-2xl w-[400px] px-6 py-7 relative">
        {showRegister ? (
          <Register toggle={() => setShowRegister(false)} />
        ) : (
          <Login toggle={() => setShowRegister(true)} />
        )}
        <button onClick={onClose} className="absolute top-5 right-5"><X/></button>
      </div>
    </div>
  );
}

export default Account;
