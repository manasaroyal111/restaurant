import React from "react";

const RazorpayButton = ({ amount, orderId }) => {
  const handlePayment = async () => {
    const options = {
      key: "your_razorpay_key_id", // Replace with your Razorpay Key ID
      amount: amount * 100, // Convert to paisa
      currency: "INR",
      name: "Your Shop Name",
      description: "Payment for your order",
      order_id: orderId,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        console.log(response);
        // API call to verify payment & store order
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return <button onClick={handlePayment}>Pay - ₹{amount}</button>;
};

export default RazorpayButton;
