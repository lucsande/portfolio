import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ProjectCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const handleClick = () => {
    if (props.isFullCarousel) {
      return;
    }

    props.setIsFullCarousel(true);
  };

  const isFullScreen = props.isFullCarousel ? "full-carousel" : "";

  const items = props.gallery.map(img => (
    <Carousel.Item>
      <img className="d-block w-100" src={img} alt="project slide" />
    </Carousel.Item>
  ));

  return (
    <div className={`carousel-outer-container ${isFullScreen}`}>
      <div className="carousel-inner-container">
        <div
          className="carousel-backdrop"
          onClick={() => props.setIsFullCarousel(false)}
        ></div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          onClick={handleClick}
        >
          {items}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCarousel;
