import React, { useState } from "react";
import projectsList from "../projectsList";
import Project from "./Project";

const Projects = props => {
  const [visibleProject, setVisibleProject] = useState("Buddysteps");

  const thumbnails = () => {
    return Object.keys(projectsList).map(proj => (
      <div
        onClick={() => setVisibleProject(projectsList[`${proj}`].title)}
        className="col-6 col-md-4 p-0"
      >
        <div>
          <img
            src={projectsList[`${proj}`].gallery[0]}
            alt="project thumbnail"
            className="thumbnail shadow-lg"
          />
          <div className="thumb-overlay">
            <p className="thumb-text thumb-title">
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
    <div id="projects" className="">
      <h2 className="font-weight-bold">Projects</h2>
      <h3 className="font-weight-lighter">
        Some of my favorites from all the stuff I've made.
      </h3>
      <div className="row justify-content-center">
        <div id="projects-thumbnails" className="row">
          {thumbnails()}
        </div>
      </div>
      {projects()}
    </div>
  );
};

export default Projects;
