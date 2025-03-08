import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Items from './components/Items'

function App() {


  return (
    <CartProvider>
    <div className="App">
   <Header />
<Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:categoryName' element={<Category />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/items' element={<Items />}></Route>
       </Routes>

     </div>
     </CartProvider>
  );
}

export default App;
