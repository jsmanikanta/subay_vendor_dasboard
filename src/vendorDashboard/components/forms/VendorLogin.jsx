import React, { useState } from "react";
import { API_PATH } from "../../data/apiPath";

function VendorLogin({ showWelcome }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const response = await fetch(`${API_PATH}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        alert("Login success");
        localStorage.setItem("token", data.token);
        showWelcome();
      }
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  return (
    <div className="loginSection">
      <h3>Vendor Login</h3>
      <form className="authForm" onSubmit={submitHandle}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default VendorLogin;