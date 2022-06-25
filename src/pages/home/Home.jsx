import React from "react";
import Blog from "../../components/Blog/Blog";
import Header from "../../components/Header/Header";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Blog />
    </div>
  );
};

export default Home;
