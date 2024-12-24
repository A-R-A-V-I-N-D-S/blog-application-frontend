import React from "react";
import "./single-post.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://img.goodfon.com/wallpaper/nbig/8/37/priroda-peizazh-reka-berega-lesa-osen-tuman.webp"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Prashanth</b>
          </span>
          <span className="singlePostDatee">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores
          expedita omnis voluptatum, totam incidunt fugit odit at asperiores
          dolorum adipisci, minima consectetur assumenda iste, quibusdam atque
          placeat minus possimus! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ea maiores expedita omnis voluptatum, totam incidunt
          fugit odit at asperiores dolorum adipisci, minima consectetur
          assumenda iste, quibusdam atque placeat minus possimus! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ea maiores expedita
          omnis voluptatum, totam incidunt fugit odit at asperiores dolorum
          adipisci, minima consectetur assumenda iste, quibusdam atque placeat
          minus possimus! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ea maiores expedita omnis voluptatum, totam incidunt fugit odit
          at asperiores dolorum adipisci, minima consectetur assumenda iste,
          quibusdam atque placeat minus possimus! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ea maiores expedita omnis voluptatum,
          totam incidunt fugit odit at asperiores dolorum adipisci, minima
          consectetur assumenda iste, quibusdam atque placeat minus possimus!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maiores
          expedita omnis voluptatum, totam incidunt fugit odit at asperiores
          dolorum adipisci, minima consectetur assumenda iste, quibusdam atque
          placeat minus possimus! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ea maiores expedita omnis voluptatum, totam incidunt
          fugit odit at asperiores dolorum adipisci, minima consectetur
          assumenda iste, quibusdam atque placeat minus possimus!
        </p>
      </div>
    </div>
  );
}
