import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" z-10 bg-white/20 shadow-md bg-blur-70">
      <div className="max-w-7xl mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <img src="public/logo/logo.png" alt="Logo" width={80} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 text-white font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/packages">Tour Package</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="flex items-center gap-4">
            <select
              className="border border-white text-white rounded px-2 py-1 text-sm"
              defaultValue="english"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="malayalam">Malayalam</option>
            </select>
            <button className="text-white font-medium">Login</button>
            <Button label="Register" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <div className="flex flex-col gap-2 text-white font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/packages">Tour Package</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <select
              className="border border-white bg-black/50 text-white rounded px-2 py-1 text-sm"
              defaultValue="english"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="malayalam">Malayalam</option>
            </select>
            <button className="text-gray-700 text-white font-medium">Login</button>
            <Button label="Register" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
