import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";

const Home = props => {
  return (
    <div id="home-container">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
