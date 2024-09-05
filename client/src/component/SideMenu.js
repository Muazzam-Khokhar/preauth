// src/SideMenu.js
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import the icons
import { Link } from 'react-router-dom'


const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-4 left-4 z-10 flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-md"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="mt-16 space-y-4 p-4">
          <li>
            <Link to="/" className="block hover:text-gray-400" onClick={()=>{setIsOpen(!isOpen)}}>Home</Link>
          </li>
          <li>
            <Link to="/provider" className="block hover:text-gray-400" onClick={()=>{setIsOpen(!isOpen)}}>Add Provider</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;