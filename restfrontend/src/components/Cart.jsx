import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Cart() {
    const { cart, total, incQuant, decQuant } = useContext(CartContext);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Your Cart</h2>
            <div className="row">
                {cart.map(cartItem => (
               
                    <div key={cartItem.id} className="col-md-4 mb-3">
                         <img
                  src={cartItem.item.image}
                  className="card-img-top"
                  alt={cartItem.name}
                  style={{ height: "250px", width: "100%", objectFit: "cover" }} 
              />
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{cartItem.item.name}</h5>
                                <p className="card-text">Price: ${cartItem.item.price.toFixed(2)}</p>
                                <p className="card-text">Quantity: 
                                    <button className="btn btn-sm btn-outline-primary mx-2" onClick={() => incQuant(cartItem)}>+</button>
                                    {cartItem.quantity}
                                    <button className="btn btn-sm btn-outline-danger mx-2" onClick={() => decQuant(cartItem)}>-</button>
                                </p>
                                <p className="card-text"><strong>Subtotal: ${ (cartItem.quantity * cartItem.item.price).toFixed(2) }</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h4>Total: ${total.toFixed(2)}</h4>
            </div>
        </div>
    );
}
