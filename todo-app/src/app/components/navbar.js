'use client'
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
import Tasks from '../tasks/page';

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Todo App</div>
        <div className=" flex gap-11 "><span><Link href="/">New</Link></span>
        <span><Link href="tasks">tasks</Link></span></div>
        <div><Button/></div>
        
        

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleDrawer}
            className="focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer for Mobile */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          {/* Your Drawer Content Goes Here */}
          <ul>
            <li><Link href="/">New</Link></li>
            <li><Link href="tasks">tasks</Link></li>
            
          </ul>
        </div>
      )}
    </div>
  );
};


