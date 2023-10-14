'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaChartBar, FaTemperatureHigh, FaOutdent, FaHome, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  const handleLogout = () => {
    setShowPopup(true);
  };
  const handleCancel = () => {
    setShowPopup(false);
  };
  const handleContinue = () => {
    console.log('Logged out');
    window.location.href = '/signin';
    setShowPopup(false);
  };
  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 h-screen w-16 bg-blue-950 ${isOpen ? 'w-64' : ''}`}>
        <div className="flex justify-between items-center h-16">
          <div className="ml-2"></div>
          <button className="text-white mr-2" onClick={toggleMenu}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {isOpen && (
          <>
            <div className="w-40 mr-20 ml-7">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <hr className="border-gray-300 my-2" />
            <nav className="flex flex-col mt-4">
              <Link href="/homePage" className={`flex items-center text-white px-8 py-4 ${activeItem === 'homePage' ? 'bg-blue-600' : 'hover:bg-blue-600'}`} onClick={() => handleItemClick('homePage')}>
                <FaHome className="text-lg mr-2" /> Home
              </Link>
              <Link href="/pH" className={`flex items-center text-white px-8 py-4 ${activeItem === 'pH' ? 'bg-blue-600' : 'hover:bg-blue-600'}`} onClick={() => handleItemClick('pH')}>
                <FaTemperatureHigh className="text-lg mr-2" /> pH & Temperature
              </Link>
              <Link href="/dataVisualization" className={`flex items-center text-white px-8 py-4 ${activeItem === 'dataVisualization' ? 'bg-blue-600' : 'hover:bg-blue-600'}`} onClick={() => handleItemClick('dataVisualization')}>
                <FaChartBar className="text-lg mr-2" /> Data Visualization
              </Link>
              <hr className="border-gray-300 my-2" />
              <div
                className={`menu-item flex items-center text-white px-8 py-4 ${activeItem === 'logout' ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
                onClick={handleLogout}
              >
                <FaSignOutAlt className="text-lg mr-2" /> Logout
              </div>
            </nav>
          </>
        )}
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-blue-950 bg-opacity-50 flex items-center justify-center">
        <div className="bg-blue-950 p-6 rounded-md text-white">
          <h2 className="text-lg font-medium mt-5 pb-5">Are you sure you want to log out of your account?</h2>
          <div className="flex mt-1 pb-6">
            <button className="px-16 py-3 ml-3 font-bold rounded-md hover:border-opacity-95 text-white" onClick={handleCancel}>Cancel</button>
            <button className="px-16 py-3 ml-3 font-bold rounded-md bg-blue-950 border-2 border-blue-700 text-white hover:bg-opacity-75" onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
export default Sidebar;