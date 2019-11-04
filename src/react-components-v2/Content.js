import React from "react";
import WhyMe from "./WhyMe.js";
import Projects from "./Projects.js";

const Content = props => {
  return (
    <div id="content-container" className="container">
      <WhyMe />
      <Projects />
    </div>
  );
};

export default Content;
