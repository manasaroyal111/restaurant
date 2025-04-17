// import React from 'react'
// import { useState, useEffect, useContext } from 'react'; 
// import axios from 'axios'
// import { CartContext } from './CartContext';
// import { useParams } from "react-router-dom";





// export default function Category() {
//     const [items, setItems] = useState([])
//     const {categoryName} = useParams()
//     const { cart,setCart, incQuant, decQuant } = useContext(CartContext);

//     useEffect(()=>{
//         const fetchdata = async ()=>{
//           try{
//             const itemres = await axios.get(`http://localhost:8000/category/${categoryName}/`)
//             setItems(itemres.data)
//           }catch(error){
//              console.log(error)
//           }
//         }
//         fetchdata()
//       }, [categoryName]);

//   const handleCart = async(item)=>{
       
//     try{
//       const payload = {item: item.id, quantity: 1}
//       const res = await axios.post('http://127.0.0.1:8000/cart/', payload)
//       setCart([...cart, res.data]);
//       alert('item added')

//     }
//     catch(error){
//       console.log(error)
//       alert('Couldnt add')
//     }
//   }


//   return (
//     <div>
//       <h1>{categoryName}</h1>
//         {
//      <div>
//       {items.map((item)=>{
// const cartItem = cart.find(cItem => cItem.item.id === item.id);
// return (
//     <div key={item.id} className='bestseller-card'>
//           <img className="bestseller-img" src={item.image_url} alt={item.name} />
//           <p>{item.name} - ₹{item.price}</p>
//         {cartItem ? (
//             <>
//                 <button onClick={()=>incQuant(cartItem)}>+</button>
//                 {cartItem.quantity}
//                 <button onClick={()=>decQuant(cartItem)}>-</button>
//             </>
//         ) : (
//             <button onClick={()=>handleCart(item)}>Add to Cart</button>
//         )}
//     </div>
// );      })}
//      </div> }
//     </div>
//   )
// }




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/ProductSection.css";

export default function Category() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categorySlug } = useParams();
  const categoryName = categorySlug.replace(/-/g, " ");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemRes = await axios.get(`http://localhost:8000/category/${categoryName}/`);
        setItems(itemRes.data);
      } catch (error) {
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [categoryName]);

  return (
    <div className="category-page">
      <h2 className="category-title">{categoryName}</h2>

      {loading ? (
        <p className="loading-text">Loading items...</p>
      ) : Array.isArray(items) && items.length > 0 ? (
        <div className="category-grid">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="loading-text">No items found in this category.</p>
      )}
    </div>
  );
}
