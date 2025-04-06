// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import RazorpayButton from "../components/RazorpayButton";

// const Checkout = () => {
//   const location = useLocation();
//   const amount = location.state?.total || 0; // Get total amount from CartPopup
//   const [orderId, setOrderId] = useState(null);
//   const [showPayment, setShowPayment] = useState(false); // Control payment button visibility

//   const [address, setAddress] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/create-order/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amount, address: address }),
//       });

//       const data = await response.json();

//       if (data.order_id) {
//         setOrderId(data.order_id);
//         setShowPayment(true); // Show Razorpay button only after order is created
//       } else {
//         console.error("Error creating order:", data);
//       }
//     } catch (error) {
//       console.error("Failed to create order:", error);
//     }
//   };

//   return (
//     <div className="container" style={{paddingTop: '150px'}}>
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
//         <input type="text" name="street" placeholder="Street Address" onChange={handleChange} required />
//         <input type="text" name="city" placeholder="City" onChange={handleChange} required />
//         <input type="text" name="state" placeholder="State" onChange={handleChange} required />
//         <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
//         <button type="submit">Proceed to Payment</button>
//       </form>

//       {/* Show total and payment button after order is created */}
//       {showPayment && orderId && (
//         <div>
//           <h3>Total Amount: ₹{amount}</h3>
//           <RazorpayButton amount={amount} orderId={orderId} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;





import React, { useState } from "react";

const PhonePeAuth = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const fetchToken = async () => {
    const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/v1/oauth/token";

    const body = new URLSearchParams({
      client_id: "VAMSHI",  
      client_version: "1",       
      client_secret: "TESTSECRET123",
      grant_type: "client_credentials"
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.access_token);
        
      } else {
        setError(data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ paddingTop: "160px" }}>
      <button onClick={fetchToken} className="btn btn-primary">
        Get PhonePe Access Token
      </button>
      {token && <p>Access Token: {token}</p>}
      {error && <p style={{ color: "red" }}>Error: {JSON.stringify(error)}</p>}
    </div>
  );
};

export default PhonePeAuth;
