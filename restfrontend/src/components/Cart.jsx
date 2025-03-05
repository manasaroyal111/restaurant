import React from 'react'
import { useState, useEffect } from 'react'; 
import axios from 'axios'

export default function Cart() {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const fetchdata = async ()=>{
          try{
            const cartres = await axios.get(`http://localhost:8000/cart/`)
            setCart(cartres.data)
          }catch(error){
             console.log(error)
          }
        }
        fetchdata()
      }, []);



  return (
    <div>

{
     <ul>
      {cart.map((item)=>(
        <li>{item.item.name} - {item.quantity}</li>
      ))}
     </ul> }



    </div>
  )
}
