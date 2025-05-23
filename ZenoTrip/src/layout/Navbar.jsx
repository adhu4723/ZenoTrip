import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Menu, X } from 'lucide-react';

function Navbar({ showAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Tour Package', path: '/packages' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const languages = ['english', 'hindi', 'malayalam'];

  return (
    <nav className="z-10 bg-black/30 shadow-md bg-blur-70">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <img src="/ZenoTrip/logo/logo.png" alt="Logo" width={80} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <select className="border border-white text-white rounded px-2 py-1 text-sm" defaultValue="english">
              {languages.map((lang) => (
                <option className='text-black' key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
            <button className="text-white font-medium">Login</button>
            <Button onClick={showAuth} label="Register" />
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
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <select className="border border-white bg-black/50 text-white rounded px-2 py-1 text-sm" defaultValue="english">
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
            <button className="text-white font-medium">Login</button>
            <Button onClick={showAuth} label="Register" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
