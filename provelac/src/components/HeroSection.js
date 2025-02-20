import React from 'react';

const HeroSection = ({ isDarkMode }) => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-400 rounded-tr-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-200 rounded-lg rotate-45 animate-float"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
          Discover the Art of
          <span className="block text-blue-500">Fine Cheese</span>
        </h1>
        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Journey through our curated selection of artisanal cheeses, crafting supplies, and premium accessories
        </p>
      </div>
    </div>
  );
};

export default HeroSection;