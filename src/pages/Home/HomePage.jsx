import React from "react";
import "./home-page.css";
import Header from "../../components/header/Header";
import SinglePost from "../../components/single-post/SinglePost";
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
