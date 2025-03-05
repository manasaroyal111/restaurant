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


  return (
    <div>
        {
     <ul>
      {items.map((item)=>(
        <li>{item.name} - {item.price}</li>
      ))}
     </ul> }
    </div>
  )
}
