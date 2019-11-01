import React, { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

const FullCarousel = props => {
  if (props.isFullCarousel === false) {
    return null;
  }

  return (
    <div className="full-carousel-container">
      <div
        className="carousel-backdrop"
        onClick={() => props.setIsFullCarousel(false)}
      ></div>
      <div className="full-carousel">
        <ProjectCarousel gallery={props.gallery} />
      </div>
    </div>
  );
};

export default FullCarousel;
