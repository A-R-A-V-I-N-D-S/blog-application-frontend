import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.goodfon.com/wallpaper/nbig/8/1c/badfon-kust-stebli-derevo-solnce-boke.webp"
        alt=""
      />
    </div>
  );
}
