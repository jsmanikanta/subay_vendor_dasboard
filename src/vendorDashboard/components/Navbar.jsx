import React from 'react';

function Navbar({ showLoginHandler, showRegisterHandler }) {
  return (
    <div className='navSection'>
      <div className="companyname">Vendor Dashboard</div>
      <div className="userauth">
        <button onClick={showLoginHandler} className="authButton">Login</button>
        <button onClick={showRegisterHandler} className="authButton">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
