import React from 'react'
import { useState, useEffect , useContext} from 'react'; 
import axios from 'axios'
import { CartContext } from './CartContext';


export default function Cart() {
    const { cart, setCart, total, incQuant, decQuant } = useContext(CartContext);


  return (
    <div>

<ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            {cartItem.item.name} - 
            <button onClick={()=>incQuant(cartItem)}>+</button>
            {cartItem.quantity}
            <button onClick={()=> decQuant(cartItem)}>-</button>
            {cartItem.quantity * cartItem.item.price}

          </li>
        ))}
      </ul>

  <h4>Total : </h4>{total}
    </div>
  )
}
