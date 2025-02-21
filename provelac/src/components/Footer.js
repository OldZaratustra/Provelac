import React from 'react';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="title">🧀 CheeseWorld</h3>
          <p className="description">Crafting moments of joy through exceptional cheese</p>
        </div>
        <div>
          <h4 className="section-title">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="link">About Us</a></li>
            <li><a href="#" className="link">Products</a></li>
            <li><a href="#" className="link">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="section-title">Visit Us</h4>
          <ul className="space-y-2 description">
            <li>123 Cheese Street</li>
            <li>Dairy City, DC 12345</li>
            <li>info@cheeseworld.com</li>
          </ul>
        </div>
        <div>
          <h4 className="section-title">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;