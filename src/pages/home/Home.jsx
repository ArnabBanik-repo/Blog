import React from "react";
import Blog from "../../components/Blog/Blog";
import Header from "../../components/Header/Header";
import SideIcons from "../../components/SideIcons/SideIcons";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <SideIcons />
      <Blog />
    </div>
  );
};

export default Home;
