import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HorizontalScroller() {
  return (
    <div className="horizontal-scroll-container">
      <div className="scroll-wrapper">
        <div className="scroll-content">
          <h2 className="scroll-text">Handcrafted to Perfection</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Nutella_Kunafa_5411f153-82c1-4a88-9bed-ce86afccdbf4.webp`}
          alt="Delight" className="scroll-img" />
          <h2 className="scroll-text">Gifts That Impress</h2>
<img src={`${process.env.PUBLIC_URL}/images/baklava_background.avif`}
          alt="Delight" className="scroll-img" />   

           <h2 className="scroll-text">Handcrafted to Perfection</h2>
<img src={`${process.env.PUBLIC_URL}/images/rose_petal_turkish_delight.webp`}
          alt="Delight" className="scroll-img" />          
          <h2 className="scroll-text">Gifts That Impress</h2>
<img src={`${process.env.PUBLIC_URL}/images/Nutella_Kunafa_5411f153-82c1-4a88-9bed-ce86afccdbf4.webp`}
          alt="Delight" className="scroll-img" />        </div>
        {/* Duplicate for seamless looping */}    
            <div className="scroll-content">
          <h2 className="scroll-text">Handcrafted to Perfection</h2>
          <img src={`${process.env.PUBLIC_URL}/images/baklava_background.avif`}
          alt="Delight" className="scroll-img" />          <h2 className="scroll-text">Gifts That Impress</h2>
<img src={`${process.env.PUBLIC_URL}/images/rose_petal_turkish_delight.webp`}
          alt="Delight" className="scroll-img" />          
          <h2 className="scroll-text">Handcrafted to Perfection</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Nutella_Kunafa_5411f153-82c1-4a88-9bed-ce86afccdbf4.webp`}
          alt="Delight" className="scroll-img" />               <h2 className="scroll-text">Gifts That Impress</h2>
 <img src={`${process.env.PUBLIC_URL}/images/baklava_background.avif`}
          alt="Delight" className="scroll-img" />              </div>


<div className="scroll-content">   
             <h2 className="scroll-text">Gifts That Impress</h2>
<img src={`${process.env.PUBLIC_URL}/images/rose_petal_turkish_delight.webp`}
          alt="Delight" className="scroll-img" />          
          <h2 className="scroll-text">Handcrafted to Perfection</h2>
          <img src={`${process.env.PUBLIC_URL}/images/Nutella_Kunafa_5411f153-82c1-4a88-9bed-ce86afccdbf4.webp`}
          alt="Delight" className="scroll-img" />               <h2 className="scroll-text">Gifts That Impress</h2>
 <img src={`${process.env.PUBLIC_URL}/images/baklava_background.avif`}
          alt="Delight" className="scroll-img" />              </div>
      </div>
    </div>
  );
}
