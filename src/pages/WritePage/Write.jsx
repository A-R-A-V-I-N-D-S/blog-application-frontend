import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://img.goodfon.com/wallpaper/nbig/8/37/priroda-peizazh-reka-berega-lesa-osen-tuman.webp"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            id="title"
            placeholder="Title..."
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            id=""
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
