import React from "react";
import '../styles/Mid.css'

export default function Mid() {
  const collections = [
    { id: 1, title: "Baklava", image: "/images/cranberry-turkish-delight-459400.webp" },
    { id: 2, title: "Kunafa", image: "/images/kunafa-p.webp" },
    { id: 3, title: "Turkish Delight", image: "/images/chocolate-oshe-bulbul-almond-kunafa-619968.webp" },
  ];

  return (
    <div className="mid-section">
      <h2 className="mid-title">Explore Our Signature Collections</h2>
      <p className="mid-description">
        Indulge in the finest Baklava, Kunafa, and Turkish Delight.
      </p>

      <div className="collections-container">
        {collections.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.image} alt={item.title} className="collection-img" />
            <div className="overlay">
              <h3 className="overlay-title">{item.title}</h3>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>


    <div className="banner_up">
    <p className="banner_up_1">unwrap pure indulgence</p>
    <p className="banner_up_2">Our Handpicked Selections</p>
    <p className="banner_up_3">Explore our Assorted Delights and Combo Specials, crafted for delightful moments.</p>

    </div>
  
      <div className="discount-banner">
      <img
        src={`${process.env.PUBLIC_URL}/images/Baklava_small-image_copy.webp`}
        alt="Discount Offer"
        className="banner-img"
      />

      <div className="banner-border"></div>

      <div className="banner-overlay">
        <div className="discount-content">
          <div className="discount-left">
            <p className="extra-text">Enjoy</p>
            <div className="discount-big">
              <span className="discount-number">5</span>
              <div className="discount-percentage">
                <span className="discount-percent">%</span>
                <span className="discount-off">OFF</span>
              </div>
            </div>
            <p className="discount-subtext">On all Products</p>
          </div>

          <div className="separator"></div>

          <div className="discount-right">
            <p className="discount-text">
              Your Special Offer Awaits <br />
              Use code TODAY5  at checkout for a 5% discount sitewide. 
              Treat yourself to luxury sweets at a sweeter price!
            </p>
            <button className="shop-btn">Shop Today</button>
          </div>
        </div>
      </div>
    </div>




    </div>
  );
}
