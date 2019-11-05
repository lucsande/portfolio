import React, { useState } from "react";
import projectsList from "../projectsList";
import Project from "./Project";

const Projects = props => {
  const [visibleProject, setVisibleProject] = useState("");

  const changeVisibleProject = projID => {
    const projContent = document.querySelector(`#${projID}`);

    setVisibleProject(projID);
    setTimeout(() => {
      projContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const thumbnails = () => {
    return Object.keys(projectsList).map(proj => (
      <div
        onClick={() => changeVisibleProject(projectsList[`${proj}`].id)}
        className="col-12 col-md-6 p-0 border"
      >
        <div>
          <img
            src={projectsList[`${proj}`].gallery[0]}
            alt="project thumbnail"
            className="thumbnail"
          />
          <div className="thumb-overlay">
            <p className="thumb-text thumb-title font-weight-bold">
              {projectsList[`${proj}`].title}
            </p>
            <p className="thumb-text thumb-tag">
              {projectsList[`${proj}`].tags[0]}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const projects = () => {
    return Object.keys(projectsList).map(proj => (
      <Project
        visibleProject={visibleProject}
        project={projectsList[`${proj}`]}
      />
    ));
  };

  return (
    <React.Fragment>
      <div id="projects" className="hidden-content">
        <h2 className="font-weight-bold">Projects</h2>
        <h3 className="font-weight-lighter">
          I've made a bunch of apps so far, here are my favorite ones.
        </h3>
        <div className="row justify-content-center justify-content-md-start">
          <div id="projects-thumbnails" className="row p-5 p-md-0 ml-0 ml-md-5">
            {thumbnails()}
          </div>
        </div>
      </div>
      {projects()}
    </React.Fragment>
  );
};

export default Projects;
