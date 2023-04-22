import React,{ Component } from 'react';
import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login=() => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate('/Booking');
  };
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const loginUser =async(e) =>{
    e.preventDefault();
    const res = await fetch('/login',{
        method :"POST",
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify({
          email,
          password
        })
    });
    const data=res.json();
    if(res.status===400||!data){
      window.alert("invalid Credentials");
    }else{
      window.alert("Login Sucessfull");
      navigate.push("/");
    }
  }

        return (
            <form method ="POST" className="pp">
        <h3>Log in</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <Link to='/Rec'><button type="submit" className="btn btn-primary">
            Submit
          </button></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <Link className="navbar-brand" to="/Signup">Sign up</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      </form>
        );
    }
    export default Login;