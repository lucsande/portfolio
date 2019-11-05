import React from "react";
import WhyMe from "./WhyMe.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";

const Content = props => {
  return (
    <div id="content-container" className="container">
      <WhyMe />
      <Projects />
      <Resume />
    </div>
  );
};

export default Content;
