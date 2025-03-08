import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import top_img from '../assets/slider1.jpg'
import AllItems from './Items'

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
        

          <div className='top_container'>
      <img src={top_img}  className='top_img_lv'/>
     <div className='top_overlay'>
        <p className='overlay_h1'>Welcome Spring with Our Vibrant New Collection</p>
        <p className='overlay_p'>Discover the latest trends, timeless classics, and unique pieces designed to 
            make you stand out. From chic workwear to stunning evening wear, our collection
             has something for every occasion.
        </p>
        <a className='overlay_btn btn'>Explore now</a>
     </div>
      </div>
      <div>

      </div>




     <h3 className='category_head'>Our Categories</h3>

      <div className="category-container">
                <div className="category-scroll">
                    {category.map((cat) => (
                        <div className="category-card" key={cat.id}>
                            <img className="category-img" src={cat.image_url} alt={cat.name} />
                            <p>
                                <a onClick={() => handleClick(cat.name)} className="category-link">
                                    {cat.name}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>





      
      <AllItems />
        </div>
      );
}
