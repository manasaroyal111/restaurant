// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
// import { Link } from "react-router-dom";


// const CartPopup = ({ isOpen, toggleCart }) => {
//   const { cart, incQuant, decQuant, removeFromCart, total, totalItems} = useContext(CartContext);

//   return (
//     <>
//       {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
      
//       <div className={`cart-popup ${isOpen ? "open" : ""}`}>
//         <div className="cart-header">
//           <h4>Your Cart{totalItems > 0 && <span className="cart-count" style={{fontSize: '0.8rem', paddingTop: '-10px'}}>{totalItems}</span>}
//           </h4>
//           <button className="close-btn" onClick={toggleCart}><i className="bi bi-x"></i>
//           </button>
//         </div>
        
      
                


//             {cart.length === 0 ? (
//           <p className="empty-cart" style={{ paddingTop: '140px'}}>Your cart is empty</p>
//         ) : (
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.item.id} className="cart-item">
//                 <img src={item.item.image_url} alt={item.item.name} className="cart-item-img" />
//                 <div className="cart-item-details">
//                   <div className="cart-item-info">
//                     <p className="cart-item-name">{item.item.name}</p>
//                     <p className="cart-item-price">Rs. {item.item.price} INR</p>
//                   </div>
//                   <div className="cart-item-actions">
//                     <div className="cart-quantity">
//                       <button onClick={() => decQuant(item)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => incQuant(item)}>+</button>
//                     </div>
//                     <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

// {cart.length > 0 && (
//           <div className="cart-footer">
//             <p className="cart-total">Total: Rs. {total}</p>
//             <div className="checkout-btn">
//               <Link to="/checkout" onClick={toggleCart} className="checkout-btn-txt">Checkout</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPopup;




















import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const CartPopup = ({ isOpen, toggleCart }) => {
  const { cart, incQuant, decQuant, removeFromCart, total, totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart(); // Close cart popup
    navigate("/checkout", { state: { total } });
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

      <div className={`cart-popup ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h4>Your Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}</h4>
          <button className="close-btn" onClick={toggleCart}><i className="bi bi-x"></i></button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.item.id} className="cart-item">
                <img src={item.item.image_url} alt={item.item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.item.name}</p>
                    <p className="cart-item-price">Rs. {item.item.price} INR</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button onClick={() => decQuant(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incQuant(item)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-footer">
            <p className="cart-total">Total: Rs. {total}</p>
            <div className="checkout-btn" onClick={handleCheckout}>
       <Link to="/checkout"  className="checkout-btn-txt">Checkout</Link>
       </div>          </div>
        )}
      </div>
    </>
  );
};

export default CartPopup;
