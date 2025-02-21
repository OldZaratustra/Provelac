import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, isDarkMode }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <div className={`modal-content ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button onClick={onClose} className="close-button">✕</button>
        <div className="p-8">
          <img src={product.fotografia ? `/path/to/images/${product.fotografia}` : `/api/placeholder/600/400`} alt={product.nombre} className="product-image" />
          <h2 className={`product-title ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>{product.nombre}</h2>
          <div className="flex items-center mb-4">
            <span className={`product-origin ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Origin: {product.origin || 'N/A'}</span>
            <span className="product-price">{product.price || 'N/A'}</span>
          </div>
          <p className={`product-description ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.descripcion}</p>
          {product.pairings && product.pairings.length > 0 && (
            <div className="mb-6">
              <h3 className={`pairings-title ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Perfect Pairings</h3>
              <ul className="pairings-list">
                {product.pairings.map((pairing, idx) => (
                  <li key={idx} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{pairing}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;