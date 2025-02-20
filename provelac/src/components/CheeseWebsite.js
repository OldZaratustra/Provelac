import React from 'react';
import FloatingNavigation from './FloatingNavigation';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import Footer from './Footer';
import './styles.css';

const CheeseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const categories = [
    // ...existing code...
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'} transition-colors duration-300`}>
      <FloatingNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isDarkMode={isDarkMode} />
      <ProductGrid categories={categories} setSelectedProduct={setSelectedProduct} isDarkMode={isDarkMode} />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} isDarkMode={isDarkMode} />}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default CheeseWebsite;