import React, { useState } from 'react';
import BtnDonate from '../btn/BtnDonate';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" lg:py-5 lg:px-60 shadow-lg text-center sm:p-0 sm:pb-6">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-green-400 font-bold text-xl sm:text-2xl lowercase">gocingo</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none h-0  px-20 py-30 "
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto sm:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between text-black gap-10">
            <li className="p-2 hover:text-green-400 font-semibold">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 hover:text-green-400 font-semibold ">
              <a href="#about">About</a>
            </li>
            <li className="p-2 hover:text-green-400 font-semibold">
              <a href="#services">Resources</a>
            </li>
            <li className="p-2 hover:text-green-400 font-semibold ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <BtnDonate />
      </div>
    </nav>
  );
};

export default Navbar;
