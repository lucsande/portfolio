import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

const FixedNavbar = props => {
  useEffect(() => {
    const navbar = document.querySelector("#fixed-navbar");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= window.innerHeight - 100) {
        navbar.style["opacity"] = "1";
      } else {
        navbar.style["opacity"] = "0";
      }
    });
  }, []);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const showContent = id => {
    const content = document.querySelector(id);

    content.classList.remove("hidden-content");
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="navbar fixed-top"
      id="fixed-navbar"
    >
      <div onClick={scrollToTop} id="nav-text">
        <p className="font-weight-bold">Lucas Sandeville</p>
        <p className="font-weight-light">Fullstack Web Developer</p>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link onClick={() => showContent("#why-me")} href="#">
            Why me?
          </Nav.Link>
          <Nav.Link onClick={() => showContent("#projects")} href="#">
            Projects
          </Nav.Link>
          <Nav.Link onClick={() => showContent("#projects")} href="#">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FixedNavbar;
