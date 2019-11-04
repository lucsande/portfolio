import React, { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

const Project = props => {
  const [isFullCarousel, setIsFullCarousel] = useState(false);

  const isHidden =
    props.project.title === props.visibleProject ? "" : "project-hidden";

  return (
    <div id={props.project.title} className={`project ${isHidden}`}>
      <h2>{props.project.title}</h2>
      <h3>{props.project.tags[0]}</h3>
      <div>
        <a href={props.project.url} rel="noopener noreferrer" target="_blank">
          {props.project.url}
        </a>
        <div className="project-body text-secondary">
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
    </div>
  );
};

export default Project;
