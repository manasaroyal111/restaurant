
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import ProductSection from "./ProductSection";
// import Mid from "./Mid";
// import Bottom from "./Bottom";
// import useAgentId from "./useAgentId";

// export default function Home() {
//   const [category, setCategory] = useState([]);
//   const [best, setBest] = useState([]);
//   const [kunafa, setKunafa] = useState([]);
//   const [activeTab, setActiveTab] = useState("bestsellers");
//   const navigate = useNavigate();
//   const { getUrlWithAgentId } = useAgentId();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const catres = await axios.get("http://localhost:8000/categories/");
//         const besres = await axios.get("http://localhost:8000/bestsellers/");
//         const kunres = await axios.get(
//           "http://localhost:8000/category/dubai kunafa chocolate/"
//         );

//         setBest(besres.data);
//         setKunafa(kunres.data);
//         setCategory(catres.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleClick = (category_name) => {
//     navigate(getUrlWithAgentId(`/${category_name}`));
//   };

//   return (
//     <div className="App">
//       <div className="position-relative text-center">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/top_img_2.webp`}
//           alt="Banner"
//           className="img-fluid w-100"
//           style={{ height: "500px", objectFit: "cover" }}
//         />
//         <div
//           className="position-absolute top-0 w-100 h-100"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
//         ></div>
//         <div className="position-absolute top-50 start-50 translate-middle text-white">
//           <p style={{ fontSize: "1.5rem" }}>Our Collection</p>
//           <Link
//             to={getUrlWithAgentId("/items")}
//             className="btn btn-outline-light mt-3 px-4 py-2"
//             style={{ textTransform: "uppercase", fontSize: "0.9rem" }}
//           >
//             View Menu
//           </Link>
//         </div>
//       </div>

//       <ProductSection
//         bestsellers={best}
//         kunafa={kunafa}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <Mid />
//       <Bottom />
//     </div>
//   );
// }









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import Mid from "./Mid";
// import Bottom from "./Bottom";
// import ProductCard from "./ProductCard";
// import useAgentId from "./useAgentId";

// export default function Home() {
//   const [categories, setCategories] = useState([]);
//   const [categoryItems, setCategoryItems] = useState({});
//   const { getUrlWithAgentId } = useAgentId();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/categories/");
//         setCategories(res.data);

//         // For each category, fetch up to 10 items
//         const itemsByCategory = {};
//         await Promise.all(
//           res.data.map(async (cat) => {
//             const itemRes = await axios.get(
//               `http://localhost:8000/category/${cat.name}/`
//             );
//             itemsByCategory[cat.name] = itemRes.data.slice(0, 10);
//           })
//         );
//         setCategoryItems(itemsByCategory);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="App">
//       <div className="position-relative text-center">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/top_img_2.webp`}
//           alt="Banner"
//           className="img-fluid w-100"
//           style={{ height: "500px", objectFit: "cover" }}
//         />
//         <div
//           className="position-absolute top-0 w-100 h-100"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
//         ></div>
//         <div className="position-absolute top-50 start-50 translate-middle text-white">
//           <p style={{ fontSize: "1.5rem" }}>Our Collection</p>
//           <Link
//             to={getUrlWithAgentId("/items")}
//             className="btn btn-outline-light mt-3 px-4 py-2"
//             style={{ textTransform: "uppercase", fontSize: "0.9rem" }}
//           >
//             View Menu
//           </Link>
//         </div>
//       </div>

//       {categories.map((cat) => (
//         <div key={cat.id} className="container mt-5">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h4 className="text-capitalize">{cat.name}</h4>
//             <Link to={`/collections/${cat.name}`} className="text-decoration-none fw-bold">
//               View All →
//             </Link>
//           </div>
//           <div className="row g-2">
//             {(categoryItems[cat.name] || []).map((item) => (
//               <div key={item.id} className="col-6 col-md-3">
//                 <ProductCard item={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       <Mid />
//       <Bottom />
//     </div>
//   );
// }















import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Mid from "./Mid";
import Bottom from "./Bottom";
import CategorySection from "./CategorySection";
import useAgentId from "./useAgentId";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const { getUrlWithAgentId } = useAgentId();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/categories/");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      <div className="position-relative text-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/top_img_2.webp`}
          alt="Banner"
          className="img-fluid w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <p style={{ fontSize: "1.5rem" }}>Our Collection</p>
          <Link
            to={getUrlWithAgentId("/items")}
            className="btn btn-outline-light mt-3 px-4 py-2"
            style={{ textTransform: "uppercase", fontSize: "0.9rem" }}
          >
            View Menu
          </Link>
        </div>
      </div>

      {categories.map((cat) => (
        <CategorySection key={cat.id} categoryName={cat.name} categoryImageUrl={cat.image_url}/>
      ))}

      {/* <Mid />
      <Bottom /> */}
    </div>
  );
}
