// import React, {useState} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import HorizontalScroller from "./HorizontalScroller";
// import NewsLetter from "./NewsLetter";
// import '../styles/HeaderFooter.css'

// export default function Footer() {

//   return (
//     <div>

//     <NewsLetter />
//     <HorizontalScroller />
//     <footer className="py-5 footer" style={{ backgroundColor: "#c4a577" , color: '#221100'}}>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <h2 className='logo'>The <br></br>Golden Mithai<br></br>  Bites.</h2>
//           </div>

//           <div className="col-md-4 mb-3">
//             <h5 style={{color: '#411100', textTransform: 'uppercase', fontSize: '1rem'}}>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="/about" className="text-decoration-none">About Us</a></li>
//               <li><a href="/shop" className="text-decoration-none">Shop</a></li>
//               <li><a href="/contact" className="text-decoration-none">Contact</a></li>
//             </ul>
//           </div>

//           <div className="col-md-4 mb-3">
//             <h5 style={{color: '#411100', textTransform: 'uppercase', fontSize: '1rem'}}>Customer Service</h5>
//             <ul className="list-unstyled">
//               <li><a href="/shipping" className="text-decoration-none">Shipping & Returns</a></li>
//               <li><a href="/faq" className="text-decoration-none">FAQ</a></li>
//               <li><a href="/privacy" className=" text-decoration-none">Privacy Policy</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-3">
//           <p className="mb-0" style={{fontSize: '0.8rem'}}>&copy; 2025 The Golden Mithai Bites. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//     </div>

//   );
// }
















import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HorizontalScroller from "./HorizontalScroller";
import NewsLetter from "./NewsLetter";
import "../styles/HeaderFooter.css";
import useAgentId from "./useAgentId"; // Import hook to persist agentid

export default function Footer() {
  const { getUrlWithAgentId } = useAgentId(); // Get function to append agentid

  return (
    <div>
      <NewsLetter />
      <HorizontalScroller />
      <footer className="py-5 footer" style={{ backgroundColor: "#c4a577", color: "#221100" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h2 className="logo">The <br />Golden Mithai<br /> Bites.</h2>
            </div>

            <div className="col-md-4 mb-3">
              <h5 style={{ color: "#411100", textTransform: "uppercase", fontSize: "1rem" }}>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href={getUrlWithAgentId("/about")} className="text-decoration-none">About Us</a></li>
                <li><a href={getUrlWithAgentId("/items")} className="text-decoration-none">Shop</a></li>
                <li><a href={getUrlWithAgentId("/contact")} className="text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h5 style={{ color: "#411100", textTransform: "uppercase", fontSize: "1rem" }}>Customer Service</h5>
              <ul className="list-unstyled">
                <li><a href={getUrlWithAgentId("/shipping")} className="text-decoration-none">Shipping & Returns</a></li>
                <li><a href={getUrlWithAgentId("/faq")} className="text-decoration-none">FAQ</a></li>
                <li><a href={getUrlWithAgentId("/privacy")} className="text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className="mb-0" style={{ fontSize: "0.8rem" }}>
              &copy; 2025 The Golden Mithai Bites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}