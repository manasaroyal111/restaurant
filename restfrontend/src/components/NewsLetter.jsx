import React from 'react'

export default function NewsLetter() {
  return (
    <div>
      
      <div className="container-fluid py-4">
  <div className="container" style={{ borderTop: "1px solid #c4a577" }}>
    <div className="row align-items-center">
      <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start py-5">
        <p style={{ fontSize: "1.2rem"}}>Stay Sweet with Exclusive Updates</p>
        <p style={{ fontSize: "0.9rem", width: "90%" }}>
          Subscribe to our newsletter for the latest arrivals, exclusive offers, and insider news from The Baklava Box.
        </p>
      </div>

      <div className="col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex w-100" style={{ maxWidth: "500px" }}>
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter your email"
            style={{ border: "1px solid #c4a577", borderRadius: "0" }}
          />
          <button
            className="btn px-3"
            style={{
              backgroundColor: "#c4a577",
              borderRadius: "0",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "#221100",
              whiteSpace: "nowrap",
            }}
          >
            Sign Up Now
          </button>
        </div>
        <small className="mt-2 text-center" style={{ fontSize: "0.8rem", width: "70%" }}>
          By signing up, you agree to receive periodic emails from us. Unsubscribe at any time.
        </small>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
