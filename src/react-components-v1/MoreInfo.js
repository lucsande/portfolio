import React from "react";
import { Link } from "react-router-dom";

import WhyMe from "./WhyMe";
import Projects from "./Projects";
import CV from "./CV";

const MoreInfo = props => {
  return (
    <div className="info-page">
      <h1 className="text-white m-5">Lucas Sandeville</h1>
      <div className="content">
        <div className="nav-tabs">
          <Link to="/" className="nav-tab" onClick={() => props.setTab("why")}>
            Home
          </Link>
          <p
            className={`nav-tab ${props.tab === "why" ? "active-tab" : ""}`}
            onClick={() => props.setTab("why")}
          >
            Why me?
          </p>
          <p
            className={`nav-tab ${
              props.tab === "projects" ? "active-tab" : ""
            }`}
            onClick={() => props.setTab("projects")}
          >
            Projects
          </p>
          <p
            className={`nav-tab ${props.tab === "cv" ? "active-tab" : ""}`}
            onClick={() => props.setTab("cv")}
          >
            CV
          </p>
        </div>
        <div className="info-card p-4">
          <WhyMe tab={props.tab} />
          <Projects tab={props.tab} />
          <CV tab={props.tab} />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
