import React from 'react'
import { useState, useEffect, useContext } from 'react'; 
import axios from 'axios'
import { CartContext } from './CartContext';
import { useParams } from "react-router-dom";





export default function Category() {
    const [items, setItems] = useState([])
    const {categoryName} = useParams()
    const { cart,setCart, incQuant, decQuant } = useContext(CartContext);

    useEffect(()=>{
        const fetchdata = async ()=>{
          try{
            const itemres = await axios.get(`http://localhost:8000/category/${categoryName}/`)
            setItems(itemres.data)
          }catch(error){
             console.log(error)
          }
        }
        fetchdata()
      }, [categoryName]);

  const handleCart = async(item)=>{
       
    try{
      const payload = {item: item.id, quantity: 1}
      const res = await axios.post('http://127.0.0.1:8000/cart/', payload)
      setCart([...cart, res.data]);
      alert('item added')

    }
    catch(error){
      console.log(error)
      alert('Couldnt add')
    }
  }


  return (
    <div>
      <h1>{categoryName}</h1>
        {
     <div>
      {items.map((item)=>{
const cartItem = cart.find(cItem => cItem.item.id === item.id);
return (
    <div key={item.id}>
        <img  src={`http://127.0.0.1:8000${item.image}`}/>
        <p>{item.name} - ₹{item.price}</p>
        {cartItem ? (
            <>
                <button onClick={()=>incQuant(cartItem)}>+</button>
                {cartItem.quantity}
                <button onClick={()=>decQuant(cartItem)}>-</button>
            </>
        ) : (
            <button onClick={()=>handleCart(item)}>Add to Cart</button>
        )}
    </div>
);      })}
     </div> }
    </div>
  )
}
