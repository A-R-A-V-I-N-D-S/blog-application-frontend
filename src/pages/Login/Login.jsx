import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          id=""
          placeholder="Type your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          id=""
          placeholder="Type your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
