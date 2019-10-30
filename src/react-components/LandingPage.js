import React from "react";
import ProfilePic from "../pictures/foto lucas cor.jpg";

const LandingPage = params => {
  return (
    <div>
      <div className="d-flex">
        <div id="personal-info">
          <img src={ProfilePic} alt="Lucas smiling" className="avatar" />
          <div id="avatar-overlay"></div>
          <p>
            São Paulo - Brazil <i class="fi-snsuxl-map-marker-solid"></i>
          </p>
          <p>
            lucas.sandeville@gmail.com<i class="fi-xwsuxl-envelope-solid"></i>
          </p>
          <p>
            +55 11 97127-1854 <i class="fi-snsuxl-phone-solid"></i>
          </p>
          <a href="https://www.linkedin.com/in/lucas-coelho-sandeville-11493813b/">
            link to profile <i className="fi-snsuxl-linkedin"></i>
          </a>
          <a href="https://github.com/lucsande">
            link to profile <i className="fi-snsuxl-github-alt"></i>
          </a>
        </div>
        <div id="blue-banner">
          <div id="banner-content">
            <h2>Hi, I'm Lucas.</h2>
            <p>
              I am a web developer who values user experience, code readability
              and code efficiency. I am interested in working with fullstack,
              frontend or backend development - as long as it's code, I'm in!
            </p>
            <p id="skillset-text">Some of my skillset:</p>
            <div className="row" id="tags">
              <p className="tag">Javascript</p>
              <p className="tag">React/Redux</p>
              <p className="tag">Ruby on Rails</p>
              <p className="tag">Node + Express</p>
              <p className="tag">HTML</p>
              <p className="tag">CSS + Bootstrap</p>
              <p className="tag">PostgreSQL</p>
              <p className="tag">MongoDB</p>
              <p className="tag">SQL</p>
              <p className="tag">Git</p>
              <p className="tag">Photoshop</p>
              <p className="tag">Illustrator</p>
              <p className="tag">InDesign</p>
              <p className="tag"></p>
              <p className="tag"></p>
              <p className="tag"></p>
              <p className="tag"></p>
            </div>
            <div id="landing-extra-info">
              <hr></hr>
              <p>And for knowing me better:</p>
              <div id="landing-buttons" class="d-flex justify-content-center">
                <p className="button">Pros/Cons</p>
                <p className="button">Projects</p>
                <p className="button">CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
