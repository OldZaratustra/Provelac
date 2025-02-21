import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ProductGrid.css';

const ProductGrid = ({ categories, setSelectedProduct, isDarkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(category => 
          category.items.map((item, idx) => (
            <div
              key={`${category.title}-${idx}`}
              className={`group relative overflow-hidden rounded-2xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <img 
                src={item.fotografia ? `/assets/${item.fotografia}` : `/api/placeholder/400/300`} 
                alt={item.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                    {item.nombre}
                  </h3>
                  <span className="text-lg font-bold text-blue-500">
                    {item.price || 'N/A'}
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                  {item.descripcion}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {item.origin || item.type || item.material}
                  </span>
                  <button 
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform transition-transform hover:scale-105"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;