import React from 'react';
import { MoonStar, Sun } from 'lucide-react';

const FloatingNavigation = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg px-6 py-3 z-40`}>
      <div className="flex items-center space-x-8">
        <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'}`}>🧀 CheeseWorld</span>
        <div className="hidden md:flex space-x-6">
          <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors`}>Home</a>
          <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors`}>Shop</a>
          <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-500 transition-colors`}>About</a>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <MoonStar size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavigation;
