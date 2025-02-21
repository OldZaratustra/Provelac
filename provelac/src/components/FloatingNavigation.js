import React from 'react';
import { MoonStar, Sun } from 'lucide-react';
import './FloatingNavigation.css';
import ProvelacLogo from '../assets/Provelac.png';

const FloatingNavigation = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className={`nav ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="flex items-center space-x-8">
        <img src={ProvelacLogo} alt="CheeseWorld" className="logo" />
        <span className="title">CheeseWorld</span>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Shop</a>
          <a href="#" className="link">About</a>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="toggle-button"
        >
          {isDarkMode ? <Sun size={20} /> : <MoonStar size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavigation;