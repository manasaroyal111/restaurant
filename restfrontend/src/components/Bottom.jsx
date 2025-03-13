import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bottom() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories/") 
      .then((response) => response.json())
      .then((data) => setCategories(data.slice(0, 4))) 
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>

    <div className="container text-center my-5">
      <h3 className="cat-title">Explore Our Full Range</h3>
      <p className="cat-p">Find your favorites and new delights.</p>



      <div className="text-end mb-3 category-div">
        <Link to="/categories" className="cat-lnk">
          See All Collections →
        </Link>
      </div>
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div key={category.id} className="col-6 col-md-3 mb-4">
            <div className="category-item">
                <div className="category-img-container">
                <img
                src={category.image_url}
                alt={category.name}
                className="category-img"
              />

                </div>
              <p className="category-name">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="d-flex flex-column-reverse flex-md-row align-items-stretch mt-5 partner-container">
        <div className="col-md-6 d-flex flex-column justify-content-center p-4 partner-text">
          <h2 className="">Partner with Us</h2>
          <p style={{fontSize: '0.9rem'}}>Discover our Wholesale and Catering services to bring premium Middle Eastern sweets to your business.</p>
          <div className="catwhole">
            <a href="/" className=" catering">Catering</a>
            <a href="/" className="wholesale">Wholesale</a>
          </div>
        </div>

        <div className="col-md-6 partner-image">
          <img src={`${process.env.PUBLIC_URL}/images/TBB_3.webp`} alt="Partner with us" className="img-fluid h-100" />
        </div>
      </div>

    </div>

  );
}
