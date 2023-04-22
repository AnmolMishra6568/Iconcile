import React from "react";
import{Link} from "react-router-dom"
const Register =()=> {
  
        return (
            <form method="POST" className="p">
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label htmlFor="Fname">First name</label>
              <input type="text"
                name="Fname"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lname">Last name</label>
              <input type="text" 
              name="Lname"
              className="form-control" 
              placeholder="Last name" />
            </div>
            <div className="mb-3">
              <label htmlFor="Email">Email address</label>
              <input type="email"
                name="Email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <Link to="/Login"><button type="submit" name="Register" className="btn btn-primary"
              value="Register">
                Register
              </button></Link>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/Login">sign in?</a>
              
            </p>
          </form>
        );
    }
    export default Register;
