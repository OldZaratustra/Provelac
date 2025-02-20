import React from 'react';
import FloatingNavigation from './FloatingNavigation';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';
import Footer from './Footer';
import './CheeseWebsite.css';

const CheeseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const categories = [
    {
      title: 'Materia Prima',
      items: [
        {
          name: 'Peróxido de hidrógeno al 50%',
          price: '$10',
          description: 'Descripción del producto 1',
          origin: 'N/A',
          pairings: [],
          image: ''
        },
        {
          name: 'Caseina Renina',
          price: '$8',
          description: 'Caseina renina es una proteina lactea en polvo (granular) que nos ayuda a extender los quesos o a elaborar quesos analogos. Costal de 25 kg.',
          origin: 'N/A',
          pairings: [],
          image: '4_producto_p19ic.JPG'
        },
        // Agrega más productos aquí...
      ]
    },
    {
      title: 'Maquinaria',
      items: [
        {
          name: 'Bote lechero',
          price: '$15',
          description: 'Bote lechero de estaño capacidad 40 lts',
          origin: 'N/A',
          pairings: [],
          image: '17_producto_rnmet.JPG'
        },
        // Agrega más productos aquí...
      ]
    },
    {
      title: 'Equipo Especializado',
      items: [
        {
          name: 'Mandil de vinil',
          price: '$20',
          description: 'Mandil de vinil',
          origin: 'N/A',
          pairings: [],
          image: '20_producto_n6q5i.JPG'
        },
        // Agrega más productos aquí...
      ]
    }
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