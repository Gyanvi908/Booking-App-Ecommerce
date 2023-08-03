import { useRef, useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate(); //important hooks
  
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      let user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
     
      try {
        await axios.post(
          "/auth/register",
          user
        );
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
        <h3 className="login-logo">DreamBooking.com</h3>
          <span className="login-desc">
            Make Your First Booking Here!
          </span>
          
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="login-input"
            />
            <input
              placeholder="Email"
              required
              type="email"
              ref={email}
              className="login-input"
            />
            <input
              placeholder="Password"
              required
              type="password"
              ref={password}
              className="login-input"
              minLength={6}
            />
            <input
              placeholder="Confirm Password"
              required
              type="password"
              ref={passwordAgain}
              className="login-input"
            />
           
           
            <button className="login-button" type="submit">
              Sign Up
            </button>
          </form>
          <div className="log-in">
            <span className="log-in-text">Already User? </span>
            <Link to="/login">
              <button className="login-register-button">
                Log into Your Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}