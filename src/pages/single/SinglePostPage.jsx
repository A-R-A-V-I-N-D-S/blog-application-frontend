import React from "react";
import "./single-post-page.css";
import SinglePost from "../../components/single-post/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function SinglePostPage() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
