import React, { useState } from "react";
import "./top-bar.css";
import { Link, useLocation } from "react-router-dom";

export default function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Notes: The below line is a react hook to get the location for the current path
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className="top">
      <div className="left">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="center">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{isLoggedIn && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="right">
        {isLoggedIn ? (
          <img
            className="topImg"
            src="https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3-16735976194x3.jpg?impolicy=website&width=640&height=480"
            alt="Creator's Photo"
          />
        ) : (
          !isAuthPage && (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">/</li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
          )
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
