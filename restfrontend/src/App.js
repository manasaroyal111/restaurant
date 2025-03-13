import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import CartPopup from './components/CartPopup';
import { useState } from 'react';
import Contact from './components/Contact';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="App">
        <Header toggleCart={toggleCart} />
        <CartPopup isOpen={isCartOpen} toggleCart={toggleCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:categoryName' element={<Category />} />
          <Route path='/items' element={<Items />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
