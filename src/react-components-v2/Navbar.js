import React, { useEffect } from "react";

const Navbar = props => {
  useEffect(() => {
    const navText = document.querySelector("#navbar");

    setTimeout(() => {
      navText.style["opacity"] = "1";
    }, 800);
  }, []);

  return (
    <div id="navbar" className="fixed-top">
      <div id="nav-text">
        <p className="font-weight-bold">Lucas Sandeville</p>
        <p className="font-weight-light">Fullstack Web Developer</p>
      </div>
    </div>
  );
};

export default Navbar;
