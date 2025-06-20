import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { Ticket ,LogOut} from 'lucide-react'

function Navbar({ showAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuth,logout } = useContext(AuthContext);


  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Tour Package', path: '/packages' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const languages = ['english', 'hindi', 'malayalam'];

  return (
    <nav className="z-20 bg-black/30 shadow-md bg-blur-70 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <img src="/ZenoTrip/logo/logo.png" alt="Logo" width={80} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
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
            {isAuth ? (
              <div ref={dropdownRef} className='relative'>
                <button onClick={toggleDropdown} className='rounded-full bg-white p-2 cursor-pointer'>
                  <img className='rounded-full' width={30} src="https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png" alt="" />
                </button>
                {dropdownOpen && (
                  <div className='w-fit rounded text-center bg-white absolute -bottom-24 -left-18 shadow text-nowrap flex flex-col'>
                    <Link to={'/mytickets'} className='border-b cursor-pointer border-gray-200 px-6 py-2 flex gap-2'><Ticket/> My Tickets</Link>
                    <div onClick={logout} className='px-6 cursor-pointer py-2 flex gap-2 text-red-600 justify-center'> <LogOut/> Logout</div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="text-white font-medium">Login</button>
                <Button onClick={showAuth} label="Register" />
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div ref={menuRef} className="lg:hidden px-4 pb-4 space-y-4">
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
