import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4">
      <h3>Profile</h3>

      {/* Username */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="alice" 
            placeholder="Username" 
            className="form-control" 
            id="wd-username"
          />
        </div>
      </div>
      
      {/* Password */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="123" 
            placeholder="Password" 
            type="password" 
            className="form-control" 
            id="wd-password"
          />
        </div>
      </div>
      
      {/* First Name */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="Alice" 
            placeholder="First Name" 
            className="form-control" 
            id="wd-firstname"
          />
        </div>
      </div>
      
      {/* Last Name */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="Wonderland" 
            placeholder="Last Name" 
            className="form-control" 
            id="wd-lastname"
          />
        </div>
      </div>
      
      {/* Date of Birth */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="2000-01-01" 
            type="date" 
            className="form-control" 
            id="wd-dob"
          />
        </div>
      </div>
      
      {/* Email */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <input 
            defaultValue="alice@wonderland" 
            type="email" 
            className="form-control" 
            id="wd-email"
          />
        </div>
      </div>
      
      {/* Role */}
      <div className="row mb-3">
        <div className="col-sm-12">
          <select 
            defaultValue="FACULTY" 
            className="form-control" 
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      </div>

      {/* Sign out */}
      <div className="row">
        <div className="col-sm-12">
          <Link to="/Kanbas/Account/Signin" className="btn btn-secondary w-100">
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
