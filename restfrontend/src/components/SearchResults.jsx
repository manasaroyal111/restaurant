import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/search/?q=${query}`);
        setResults(res.data);
      } catch (error) {
        console.log("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="container" style={{marginTop: '170px'}}>
      <h5>Search Results for: <span className="text-primary">{query}</span></h5>
      <div className="flex-grid mt-3">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="flex-item">
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </div>
  );
}
