import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div>
      <img
        className="postImg"
        src="https://img.goodfon.com/wallpaper/nbig/8/37/priroda-peizazh-reka-berega-lesa-osen-tuman.webp"
        alt=""
      />
      <div className="postInfo">
        <div className="postCatogories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        exercitationem eum id natus quos earum ipsam quia vel facilis ipsa
        soluta aut officia quae expedita deserunt, rerum sit voluptatem libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        exercitationem eum id natus quos earum ipsam quia vel facilis ipsa
        soluta aut officia quae expedita deserunt, rerum sit voluptatem libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        exercitationem eum id natus quos earum ipsam quia vel facilis ipsa
        soluta aut officia quae expedita deserunt, rerum sit voluptatem libero.
      </p>
    </div>
  );
}
