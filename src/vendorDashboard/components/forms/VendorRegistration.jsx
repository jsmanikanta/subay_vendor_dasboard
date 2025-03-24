import React, { useState } from 'react';
import { API_PATH } from '../../data/apiPath';

function VendorRegistration({showLoginHandler}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = { username, email, password };
    
    try {
      const response = await fetch(`${API_PATH}/vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        alert("Vendor registered successfully");
        showLoginHandler();
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="registerSection">
      <form className='authForm' onSubmit={handleSubmit}>
        <h3>Vendor Register</h3>
        <label>Username</label>
        <input 
          type="text" 
          placeholder='Enter your name' 
          name='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input 
          type="email" 
          placeholder='Enter your email' 
          name='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input 
          type="password" 
          placeholder='Enter your password' 
          name='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default VendorRegistration;