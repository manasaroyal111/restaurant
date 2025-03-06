import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


function App() {


  return (
    <CartProvider>
    <div className="App">

<Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:categoryName' element={<Category />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

       </Routes>

     </div>
     </CartProvider>
  );
}

export default App;
