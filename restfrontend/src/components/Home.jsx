import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function () {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
      const fetchdata = async ()=>{
        try{
          const catres = await axios.get('http://localhost:8000/')
          setCategory(catres.data)
        }catch(error){
           console.log(error)
        }
      }
      fetchdata()
    }, []);
    
     
    const handleClick = (category_name)=>{
     navigate(`${category_name}`)      
    }
    
    
    
    
      return (
        <div className="App">
          <h1>HII</h1>
        
          {category.map((cat)=>(
            <div>
            <a onClick={()=> handleClick(cat.name)}>{cat.name}</a>
            </div>
          ))}
    
    {/* 
         <ul>
          {items.map((item)=>(
            <li>{item.name} - {item.price}</li>
          ))}
         </ul> */}
        </div>
      );
}
