import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h3 className="mb-4">Sign up</h3>
      {/* Username */}
      <input 
        placeholder="Username" 
        className="form-control mb-2" 
      />
      {/* Password */}
      <input 
        placeholder="Password" 
        type="password" 
        className="form-control mb-2" 
      />
      {/* Verify Password */}
      <input 
        placeholder="Verify Password" 
        type="password" 
        className="form-control mb-2" 
      />
      {/* Sign up and Sign in Links */}
      <div className="mt-3">
        <Link to="/Kanbas/Account/Profile" className="btn btn-primary me-2"> 
          Sign up 
        </Link>
        <Link to="/Kanbas/Account/Signin" className="btn btn-secondary"> 
          Sign in
        </Link>
      </div>
    </div>
  );
}
