import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ProjectCarousel = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const items = props.gallery.map(img => (
    <Carousel.Item>
      <img className="d-block w-100" src={img} alt="project slide" />
    </Carousel.Item>
  ));

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {items}
    </Carousel>
  );
};

export default ProjectCarousel;
