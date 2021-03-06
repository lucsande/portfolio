import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ProjectCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const navBar1 = document.querySelector("#navbar");
  const navBar2 = document.querySelector("#fixed-navbar");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const handleCarouselClick = () => {
    if (props.isFullCarousel) {
      return;
    }
    navBar1.classList.remove("fixed-top");
    navBar2.classList.remove("fixed-top");

    props.setIsFullCarousel(true);
  };

  const handleBackdropClick = () => {
    navBar1.classList.add("fixed-top");
    navBar2.classList.add("fixed-top");
    props.setIsFullCarousel(false);
  };

  const isFullScreen = props.isFullCarousel ? "full-carousel" : "";

  const items = props.gallery.map(img => (
    <Carousel.Item>
      <img className="d-block w-100" src={img} alt="project slide" />
    </Carousel.Item>
  ));

  return (
    <div
      className={`carousel-outer-container border shadow-sm ${isFullScreen}`}
    >
      <div className="carousel-inner-container">
        <div className="carousel-backdrop" onClick={handleBackdropClick}></div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          onClick={handleCarouselClick}
        >
          {items}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCarousel;
