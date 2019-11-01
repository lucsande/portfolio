import React, { useState } from "react";
// import { Link } from "react-router-dom";

import Project from "./Project";
import projectsList from "../projectsList";

const Projects = props => {
  const [hasBuddysteps, setHasBuddysteps] = useState(false);
  const [hasMeucaixa, setHasMeucaixa] = useState(false);
  const [hasVanilla, setHasVanilla] = useState(false);
  const [hasCadedoutor, setHasCadedoutor] = useState(false);
  const [hasCavani, setHasCavani] = useState(false);

  if (props.tab !== "projects") {
    return null;
  }

  return (
    <div>
      <div className="info-header">
        <h4>Main projects</h4>
        <hr />
      </div>
      <div className="info-body px-4">
        {/* BUDDYSTEPS */}
        <div className="project-header">
          <Project
            project={projectsList.buddysteps}
            isVisible={hasBuddysteps}
            toggleVisible={setHasBuddysteps}
          />
          <hr />
        </div>
        {/* MEUCAIXA */}
        <div className="project-header">
          <Project
            project={projectsList.meucaixa}
            isVisible={hasMeucaixa}
            toggleVisible={setHasMeucaixa}
          />
          <hr />
        </div>
        {/* CADEDOUTOR */}
        <div className="project-header">
          <Project
            project={projectsList.cadedoutor}
            isVisible={hasCadedoutor}
            toggleVisible={setHasCadedoutor}
          />
          <hr />
        </div>
        {/* VANILLA */}
        <div className="project-header">
          <Project
            project={projectsList.vanilla}
            isVisible={hasVanilla}
            toggleVisible={setHasVanilla}
          />
          <hr />
        </div>
        {/* CAVANI */}
        <div className="project-header">
          <Project
            project={projectsList.cavani}
            isVisible={hasCavani}
            toggleVisible={setHasCavani}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Projects;
