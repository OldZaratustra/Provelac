// filepath: /c:/Users/GERARDO/OneDrive/Escritorio/Provelac/provelac/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white'} py-12 mt-20`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>🧀 CheeseWorld</h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Crafting moments of joy through exceptional cheese</p>
        </div>
        <div>
          <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>About Us</a></li>
            <li><a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Products</a></li>
            <li><a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Visit Us</h4>
          <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>123 Cheese Street</li>
            <li>Dairy City, DC 12345</li>
            <li>info@cheeseworld.com</li>
          </ul>
        </div>
        <div>
          <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-blue-500 hover:text-blue-600">Instagram</a>
            <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;