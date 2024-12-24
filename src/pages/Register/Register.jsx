import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          id=""
          placeholder="Type your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          id=""
          placeholder="Type your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          id=""
          placeholder="Type your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
