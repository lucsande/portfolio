import React, { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

const Project = props => {
  const [isFullCarousel, setIsFullCarousel] = useState(false);

  const tags = props.project.tags.map(tag => <p className="sm-tag">{tag}</p>);
  const lessMore = props.isVisible ? "-" : "+";
  const isHidden = props.isVisible ? "" : "project-hidden";

  return (
    <div>
      <h6>{props.project.title}</h6>
      <a href={props.project.url} rel="noopener noreferrer" target="_blank">
        {props.project.url}
      </a>
      <div className="d-flex justify-content-between align-items-end">
        <div className="project-tags">{tags}</div>
        <p
          onClick={() => props.toggleVisible(!props.isVisible)}
          className="details-btn"
        >
          {lessMore} details
        </p>
      </div>
      <div className={`project-body text-secondary ${isHidden}`}>
        <p className="project-subtitle">Screenshots gallery</p>
        <ProjectCarousel
          gallery={props.project.gallery}
          isFullCarousel={isFullCarousel}
          setIsFullCarousel={setIsFullCarousel}
        />
        <p className="project-subtitle">Description</p>
        <p>{props.project.description}</p>
        <p className="project-subtitle">Main challenges</p>
        <p>{props.project.challenges}</p>
      </div>
    </div>
  );
};

export default Project;
