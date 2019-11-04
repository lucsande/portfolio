import React, { useEffect } from "react";

const Navbar = props => {
  useEffect(() => {
    const navText = document.querySelector("#nav-text");

    setTimeout(() => {
      navText.style["opacity"] = "1";
    }, 300);
  }, []);

  return (
    <div id="navbar">
      <div id="nav-text">
        <p className="font-weight-bold">Lucas Sandeville</p>
        <p className="font-weight-light">Fullstack Web Developer</p>
      </div>
    </div>
  );
};

export default Navbar;
