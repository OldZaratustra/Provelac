import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory, isDarkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-12">
      <div className="flex justify-center space-x-4">
        {['all', ...categories.map(c => c.title.toLowerCase())].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === cat 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : `${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} hover:bg-blue-100`
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;