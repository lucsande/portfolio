import React from "react";

import Navbar from "./Navbar";
import FixedNavbar from "./FixedNavbar";
import Banner from "./Banner";
import Content from "./Content.js";

const Home = props => {
  return (
    <div id="version-2">
      <div id="home-container">
        <Navbar />
        <FixedNavbar />
        <Banner />
      </div>
      <Content />
    </div>
  );
};

export default Home;
