import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartRes = await axios.get('http://localhost:8000/cart/');
        setCart(cartRes.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);


  // Calculate total
  useEffect(() => {
    let totalPrice = 0;
    let totalItemCount = 0;

    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].item.price * cart[i].quantity;
      totalItemCount += cart[i].quantity; 
    }
    setTotal(totalPrice);
    setTotalItems(totalItemCount);

  }, [cart]);
   //increase item quantity
   const incQuant = async (cartItem) => {
    try {
      const newQuantity = cartItem.quantity + 1;
      const res = await axios.patch(`http://localhost:8000/cart/${cartItem.id}/`, { quantity: newQuantity });
      const updatedCart = cart.map(item => item.id === cartItem.id ? res.data : item);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };
  
  //decrease item quantity
  const decQuant = async (cartItem) => {

    if (cartItem.quantity === 1) {
        try {
          await axios.delete(`http://localhost:8000/cart/${cartItem.id}/`);
          setCart(cart.filter(item => item.id !== cartItem.id));
        } catch (error) {
          console.error("Error deleting item:", error);
          alert("Could not remove item");
        }
      } 
    try {
      const newQuantity = cartItem.quantity - 1;
      const res = await axios.patch(`http://localhost:8000/cart/${cartItem.id}/`, { quantity: newQuantity });
      const updatedCart = cart.map(item => item.id === cartItem.id ? res.data : item);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };
  const removeFromCart = async (cartItem) => {
    try {
      await axios.delete(`http://localhost:8000/cart/${cartItem.id}/`);
      setCart(cart.filter(item => item.id !== cartItem.id));
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Could not remove item");
    }
  };

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };









  return (
    <CartContext.Provider value={{ cart, setCart, total, incQuant, decQuant, removeFromCart, totalItems , triggerToast}}>
      {children}
      {showToast && (
      <div className="toast-container">
        <div className="toast-message">{toastMessage}</div>
      </div>
    )}


    </CartContext.Provider>
  );
};




































