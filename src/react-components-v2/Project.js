import React, { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

const Project = props => {
  const [isFullCarousel, setIsFullCarousel] = useState(false);

  const isHidden =
    props.project.id === props.visibleProject ? "" : "project-hidden";

  return (
    <div id={props.project.id} className={`project ${isHidden}`}>
      <h2 className="font-weight-bold">{props.project.title}</h2>
      <h3 className="font-weight-lighter">{props.project.tags[0]}</h3>
      <div className="project-info">
        <p className="mb-1"><a className="font-weight-bold" href={props.project.url} rel="noopener noreferrer" target="_blank">
          {props.project.url}
        </a></p>
        <p><a href={props.project.github} rel="noopener noreferrer" target="_blank">
          {props.project.github}
        </a></p>
        <p className="project-section">Stack</p>
        <p>{props.project.stack}</p>
        <p className="project-section">Main challenges</p>
        <p>{props.project.challenges}</p>
        <p className="project-section">Description</p>
        <p>{props.project.description}</p>
        <br />
        <ProjectCarousel
          gallery={props.project.gallery}
          isFullCarousel={isFullCarousel}
          setIsFullCarousel={setIsFullCarousel}
        />
      </div>
    </div>
  );
};

export default Project;
