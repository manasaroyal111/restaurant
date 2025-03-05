import React from 'react'
import { useState, useEffect } from 'react'; 
import axios from 'axios'
import { useParams } from "react-router-dom";




export default function Category() {
    const [items, setItems] = useState([])
    const {categoryName} = useParams()
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
      }, []);

  const handleCart = async(item)=>{
       
    try{
      const payload = {item: item.id, quantity: 1}
      await axios.post('http://127.0.0.1:8000/cart/', payload)
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
      {items.map((item)=>(
        <div>
                  <a>{item.name} - {item.price}</a>
                  <button onClick={()=> handleCart(item)}>Add to Cart</button>
        </div>
      ))}
     </div> }
    </div>
  )
}
