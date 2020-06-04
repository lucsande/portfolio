import React from "react";
import ProfilePic from "../pictures/foto lucas cor.jpg";

const WhyMe = props => {
  return (
    <div id="resume" className="hidden-content">
      <h2 className="font-weight-bold">About</h2>
      <h3 className="font-weight-lighter">
        A short summary of what I've done and where I've been.
      </h3>

      <p id="cv-profile" className="row">
        <img
          src={ProfilePic}
          alt="Lucas smiling"
          className="cv-avatar mb-4 mb-md-0"
        />
        <p className="d-flex flex-column">
          <div id="cv-profile-name">
            <h5 className="font-weight-bold">Lucas Coelho Sandeville</h5>
            <h6 className="font-weight-normal">Fullstack Web Developer</h6>
          </div>
          <p>São Paulo - Brazil</p>
          <a href="mailto: lucas.sandeville@gmail.com">
            lucas.sandeville@gmail.com
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511971271854"
            rel="noopener noreferrer"
            target="_blank"
          >
            +55 11 97127-1854
          </a>
          <a href="https://www.linkedin.com/in/lucas-coelho-sandeville-11493813b/">
            LinkedIn
          </a>
          <a href="https://github.com/lucsande">GitHub</a>
        </p>
      </p>

      <div className="cv-section">
        <h4>Professional experience</h4>

        <div className="cv-experience">
          <h6>Chiligum Creatives</h6>
          <p className="cv-position">Fullstack Web Developer</p>
          <div className="cv-details font-weight-light">
            <p>Nov 2019 - currently</p>
            <p className="job-desc">
              Got first promotion in less than 4 months, with the company owners highlighting my
              "quick technical growth and senior posture when dealing with a moment of crisis".
            </p>
            <p className="job-desc">
              Constantly developing solutions for generating advertising material in
              large scale for clients like Nissan and brazilian unicorns Loft and Ifood.
              Main technologies used are Ruby on Rails, Javascript, React, Sinatra, Node,
              AWS, Docker and GitLab.
            </p>
            <p className="job-desc">
              One of the two people who developed a new microservice for generating HTML banners
              in large scale. This project was crucial for getting Nissan as a client, closing
              the biggest contract in Chiligum Creatives' history. 
            </p>
            <p className="job-desc">
              Part of the team that restructured the whole company's tech architecture for scalability, security 
              and better maintainability using microservices, cloud computing, docker and CD/CI pipelines. 
              Our work made the company capable of creating at least 20 times more videos per hour without
              any server instability.
            </p>
            <p className="job-desc">
              Developed a new feature that allows users to upload and manage media files (images, videos and audio) using Chiligum's GUI.
            </p>
            <p className="job-desc">
              Introduced integration tests to the automated test suite.
            </p>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h4>Educational background</h4>

        <div className="cv-experience">
          <h6>Rocketseat</h6>
          <p className="cv-position">GoStack - Typescript, Node+Express, React and React Native course</p>
          <div className="cv-details font-weight-light">
            <p>Apr 2020 - Jun 2020</p>
          </div>
        </div>

        <div className="cv-experience">
          <h6>Le Wagon</h6>
          <p className="cv-position">Ruby on Rails Fullstack Bootcamp</p>
          <div className="cv-details font-weight-light">
            <p>Jul 15 2019 - Sept 13 2019</p>
            <p>Stood out as one of the best students</p>
          </div>
        </div>

        <div className="cv-experience">
          <h6>São Paulo University</h6>
          <p className="cv-position">Architecture and Urbanism Bachelor</p>
          <div className="cv-details font-weight-light">
            <p>Feb 2012 - Dec 2017</p>
            <p>
              Examining board nominated my final project for the Opera Prima
              Prize, a competition with Brazil's best architecture final
              projects
            </p>
          </div>
        </div>

        <div className="cv-experience">
          <h6>Technische Universität Berlin</h6>
          <p className="cv-position">
            Architecture and Urbanism Exchange Program
          </p>
          <div className="cv-details font-weight-light">
            <p>Aug 2016 - Feb 2017</p>
            <p>
              Classes in both German and English on subjects ranging from
              structural engineering to sociology
            </p>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h4>Previous experience as an architect</h4>

        <div className="cv-experience">
          <h6>Cavani Arquitetos</h6>
          <p className="cv-position">Architect</p>
          <div className="cv-details font-weight-light">
            <p>Apr 2018 - Jul 2019</p>
            <p className="job-desc">
              Redesigned the studio's website, improving user experience and granting it a more modern appearance.
              The end result was praised by both colleagues and clients, which granted me my second raise.
            </p>
            <p className="job-desc">
              Created project presentations using modern Adobe software. 
              The most important of these presentations had great results and 
              ensured the conversion of a big project with over 500 hectares.
            </p>
            <p className="job-desc">
              Development in multidisciplinary teams of high complexity
              architecture projects such as hospitals and big urban renewals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
