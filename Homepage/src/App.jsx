import React from 'react';
import Header from './assets/components/Header';
import HeroSection from './assets/components/HeroSection';
import ProductSection from './assets/components/ProductSection';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
