import './App.css';
import Home from './components/Home';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import Category from './components/Category';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import CartPopup from './components/CartPopup';
import { useState } from 'react';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import useAgentId from './components/useAgentId';
import UploadImage from './components/UploadImage';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getUrlWithAgentId } = useAgentId();


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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/upload" element={<UploadImage />} />

        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;









