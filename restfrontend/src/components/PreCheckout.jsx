// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// export default function PreCheckout() {
//   const { cart, total, totalItems } = useContext(CartContext);

//   const handlePayment = () => {
//     alert(`Proceeding to pay Rs. ${total}`);
//     // Further integration with payment can go here
//   };

//   return (
//     <div className="precheckout-container" style={{ display: "flex" , marginTop: '100px'}}>
//       {/* Left side - Form */}
//       <div style={{ flex: 1, padding: "60px" , paddingLeft:'100px',width:'40%', backgroundColor: 'white'}}>
//         <h4>Shipping Details</h4>
//         <form>
//           <div className="mb-3">
//             <label>Name</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Phone Number</label>
//             <input type="tel" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Email</label>
//             <input type="email" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Flat Name / House No</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Building</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Area</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>City</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>State</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label>Pincode</label>
//             <input type="text" className="form-control" required />
//           </div>

//           <button type="button" className="btn btn-primary w-100" onClick={handlePayment}>
//             Pay ₹{total}
//           </button>
//         </form>
//       </div>

//       {/* Right side - Cart Items */}
//       <div style={{ flex: 1, paddingLeft: "20px", borderLeft: "1px solid #ccc", paddingTop: '70px', paddingLeft: '50px' }}>
//         {cart.map((item) => (
//           <div key={item.item.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
//             <img src={item.item.image_url} alt={item.item.name} style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }} />
//             <div style={{ flex: 1 }}>
//               <p className="mb-1">{item.item.name}</p>
//               <p className="mb-0">₹{item.item.price} x {item.quantity}</p>
//             </div>
//           </div>
//         ))}
//         <hr />
//         <div style={{ fontWeight: "bold" }}>
//           Total Items: {totalItems} <br />
//           Total Amount: ₹{total}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function PreCheckout() {
  const { cart, total, totalItems } = useContext(CartContext);

  const handlePayment = () => {
    alert(`Proceeding to pay Rs. ${total}`);
    // Further integration with payment can go here
  };

  return (
    <div className="precheckout-container" style={{ display: "flex", marginTop: "100px" }}>
      {/* Left side - Form */}
      <div style={{ flex: 1, padding: "60px", paddingLeft: "100px", width: "40%", backgroundColor: "white" }}>
        <h4>Shipping Details</h4>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Flat Name / House No</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Building</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Area</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>State</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Pincode</label>
            <input type="text" className="form-control" required />
          </div>

          <button type="button" className="btn btn-primary w-100" onClick={handlePayment}>
            Pay ₹{total}
          </button>
        </form>
      </div>

      {/* Right side - Cart Items */}
      <div style={{ flex: 1, paddingLeft: "50px", borderLeft: "1px solid #ccc", paddingTop: "70px" }}>
        <h4>Your Items</h4>
        {cart.map((item) => (
          <div key={item.item.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px", position: "relative" }}>
            <div style={{ position: "relative", marginRight: "10px" }}>
              <img
                src={item.item.image_url}
                alt={item.item.name}
                style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
              />
              <div style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {item.quantity}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", width: "50%", alignItems: "center" }}>
              <p className="mb-0" style={{ marginRight: "auto" }}>{item.item.name}</p>
              <p className="mb-0 fw-bold">₹{item.quantity * item.item.price}</p>
            </div>
          </div>
        ))}
        <hr />
        <div style={{ fontWeight: "bold" }}>
          Total Items: {totalItems} <br />
          Total Amount: ₹{total}
        </div>
      </div>
    </div>
  );
}
