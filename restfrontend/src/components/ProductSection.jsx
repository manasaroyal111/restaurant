import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import '../styles/ProductSection.css'

const ProductSection = ({ bestsellers, kunafa }) => {
  const [activeTab, setActiveTab] = useState("kunafa");
  const [fade, setFade] = useState(false);

  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setFade(true);
      setTimeout(() => {
        setActiveTab(tab);
        setFade(false);
      }, 300);
    }
  };

  const items = activeTab === "bestsellers" ? bestsellers : kunafa;

  return (
    <div className="bestseller-container">
      <div className="tab-switcher">
        <div
          className={`tab-btn ${activeTab === "bestsellers" ? "active" : ""}`}
          onClick={() => handleTabChange("bestsellers")}
        >
          Bestsellers
        </div>
        <div
          className={`tab-btn ${activeTab === "kunafa" ? "active" : ""}`}
          onClick={() => handleTabChange("kunafa")}
        >
          Kunafa Collection
        </div>
      </div>

      <div className={`bestseller-scroll ${fade ? "hidden" : ""}`}>
        {items.slice(0, 7).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}

        <Link
          to={activeTab === "bestsellers" ? "/bestsellers" : "/category/dubai kunafa chocolate"}
          className="view-all-text" style={{color: '#5a3825', alignSelf: 'center', fontSize: '1rem', fontWeight: '600', textDecoration: 'none'}}>
          View All {activeTab === "bestsellers" ? "Bestsellers" : "Kunafa Collection"} →
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;



