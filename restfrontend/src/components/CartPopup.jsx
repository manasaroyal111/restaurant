






import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import {  useNavigate } from "react-router-dom"; // ⬅️ Added useNavigate
import useAgentId from "./useAgentId";


const CartPopup = ({ isOpen, toggleCart }) => {
  const { cart, incQuant, decQuant, removeFromCart, total, totalItems } = useContext(CartContext);
  const navigate = useNavigate(); // ⬅️ Initialize
  const { getUrlWithAgentId } = useAgentId();
  

  const handleCheckout = () => {
    toggleCart(); // Close cart popup
    navigate(getUrlWithAgentId("/precheckout"));

    const orderData = {
      total: total,
      totalItems: totalItems,
      items: cart.map(item => ({
        id: item.item.id,
        name: item.item.name,
        quantity: item.quantity,
        price: item.item.price,
      })),
    };

    console.log("Order Summary:", orderData);
    alert(`Your order contains:\n${orderData.items.map(i => `${i.quantity} x ${i.name}`).join(", ")}`);
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
              <span className="checkout-btn-txt">Checkout</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPopup;











// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


// const CartPopup = ({ isOpen, toggleCart }) => {
//   const { cart, incQuant, decQuant, removeFromCart, total, totalItems } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     toggleCart(); // Close cart popup
//     navigate("/checkout", { state: { total } });
//   };

//   return (
//     <>
//       {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

//       <div className={`cart-popup ${isOpen ? "open" : ""}`}>
//         <div className="cart-header">
//           <h4>Your Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}</h4>
//           <button className="close-btn" onClick={toggleCart}><i className="bi bi-x"></i></button>
//         </div>

//         {cart.length === 0 ? (
//           <p className="empty-cart">Your cart is empty</p>
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

//         {cart.length > 0 && (
//           <div className="cart-footer">
//             <p className="cart-total">Total: Rs. {total}</p>
//             <div className="checkout-btn" onClick={handleCheckout}>
//        <Link to="/checkout"  className="checkout-btn-txt">Checkout</Link>
//        </div>          </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPopup;
