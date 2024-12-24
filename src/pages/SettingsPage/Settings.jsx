import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.news18.com/ibnlive/uploads/2023/01/shah-rukh-khan-2-3-16735976194x3.jpg?impolicy=website&width=640&height=480"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Enter the name..." />
          <label>Email</label>
          <input type="text" placeholder="Enter the email..." />
          <label>Password</label>
          <input type="password" placeholder="Enter the password..." />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
