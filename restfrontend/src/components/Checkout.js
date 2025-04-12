

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
