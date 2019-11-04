import React from "react";

const CV = props => {
  if (props.tab !== "cv") {
    return null;
  }

  return (
    <div>
      <div className="info-header">
        <h4>Resume</h4>
        <hr />
      </div>
      <div className="info-body mt-4 px-4">
        <div className="cv-section">
          <h4>Educational background</h4>

          <div className="cv-experience text-secondary">
            <h6>Le Wagon</h6>
            <p className="font-weight-bold">Ruby on Rails Fullstack Bootcamp</p>
            <div className="cv-details">
              <p>Jul 15 2019 - Sept 13 2019</p>
              <p>Stood out as one of the best students</p>
            </div>
          </div>

          <div className="cv-experience text-secondary">
            <h6>São Paulo University</h6>
            <p className="font-weight-bold">
              Architecture and Urbanism Bachelor
            </p>
            <div className="cv-details">
              <p>Feb 2012 - Dec 2017</p>
              <p>
                Examining board nominated my final project for the Opera Prima
                Prize, a competition with Brazil's best architecture final
                projects
              </p>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h4>Online Courses</h4>

          <div className="cv-experience text-secondary">
            <h6>JavaScript Algorithms and Data Structures Masterclass</h6>
            <div className="cv-details">
              <p>Oct 2019 - Currently</p>
              <p>Course by Colt Steele - Udemy</p>
            </div>
          </div>

          <div className="cv-experience text-secondary">
            <h6>Node with React: Fullstack Web Development</h6>
            <div className="cv-details">
              <p>Oct 2019</p>
              <p>Course by Stephen Grider - Udemy</p>
            </div>
          </div>

          <div className="cv-experience text-secondary">
            <h6>Complete Node.js Developer Course</h6>
            <div className="cv-details">
              <p>Oct 2019</p>
              <p>Course by Andrew Mead e Rob Percival - Udemy</p>
            </div>
          </div>

          <div className="cv-experience text-secondary">
            <h6>Modern React With Redux</h6>
            <div className="cv-details">
              <p>Sept 2019</p>
              <p>Course by Stephen Grider - Udemy</p>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h4>Professional Experience</h4>

          <div className="cv-experience text-secondary">
            <h6>Cavani Arquitetos</h6>
            <p className="font-weight-bold">Architect</p>
            <div className="cv-details">
              <p>Apr 2018 - Jul 2019</p>
              <p className="job-desc">
                Development in multidisciplinary teams of high complexity
                architecture projects such as hospitals and big urban renewals
              </p>
              <p className="job-desc">
                Created project presentations using modern tools like Photoshop,
                Illustrator and InDesing. One of these presentations, for a
                particularly demanding client, had great results and ensured the
                conversion of a big project with over 500 hectares, besides
                granting me my first raise while working in this studio.
              </p>
              <p className="job-desc">
                Redesigned the studio's website, improving user experience and
                granting it a more modern appearance. The end result was praised
                by both colleagues and clients, which granted me my second
                raise.
              </p>
            </div>
          </div>

          <div className="cv-experience text-secondary">
            <h6>
              "Seja Bem-Vindo" Short Film (Lucas Piloto's Bachelor Final
              Project)
            </h6>
            <p className="font-weight-bold">
              Architecture and Urbanism Bachelor
            </p>
            <div className="cv-details">
              <p>Feb 2012 - Dec 2017</p>
              <p className="job-desc">
                Developed a house-made recipe for theatrical blood, which was
                washable and could be produced in large quantities despite of a
                very restricted budget. After two days of research and
                experimenting, I came up with an original recipe that looked
                realistic and costed less than R$15,00 per liter.
              </p>
              <p className="job-desc">
                I was also responsible for searching props and figurine,
                negotiating purchase and lending of objects and furniture,
                scenary setup and dismantling. My good performance working on
                this short movie yielded good ties with the others involved and
                well over one year after it I was still getting invitations to
                take part in other productions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
