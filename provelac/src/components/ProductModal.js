import React from 'react';

const ProductModal = ({ product, onClose, isDarkMode }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden relative`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>
        <div className="p-8">
          <img src={`/api/placeholder/600/400`} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>{product.name}</h2>
          <div className="flex items-center mb-4">
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Origin: {product.origin}</span>
            <span className="text-blue-500 font-bold ml-auto">{product.price}</span>
          </div>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.fullDescription}</p>
          <div className="mb-6">
            <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Perfect Pairings</h3>
            <ul className="list-disc list-inside">
              {product.pairings.map((pairing, idx) => (
                <li key={idx} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{pairing}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;