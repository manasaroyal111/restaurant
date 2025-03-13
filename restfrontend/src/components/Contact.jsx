import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4 contact">Get in Touch</h2>
      <p className="text-center w-75" >
        We're here to help! Whether you have questions about our products, need
        assistance with an order, or want to discuss partnership opportunities,
        our team is ready to assist you. Fill out the form below, and we'll get
        back to you as soon as possible.
      </p>
      
      <div className="row w-100 mt-4 contact-details" style={{borderTop: '1px solid #c4a577', paddingTop: '40px'}}>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/baklava-pistachio-sobiyet-318929.webp`}            alt="Contact Us"
            className="img-fluid rounded"
            style={{ maxHeight: "500px" }}
          />
        </div>
        
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h5>WhatsApp / Call</h5>
          <p>+91 11111 11111</p>
          <h6>For bulk queries please contact:+91 11111 11111
          </h6>
          <h5>Email</h5>
          <p>sales@goldenmithaibites.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
