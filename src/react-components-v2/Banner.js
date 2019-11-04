import React, { useEffect } from "react";

const Banner = props => {
  useEffect(() => {
    const title = document.querySelector("h2");
    const subtitle = document.querySelector("h3");
    const skillsetTitle = document.querySelector(".skillset-title");
    const buttons = document.querySelector("#home-btns");

    setTimeout(() => {
      title.style["opacity"] = "1";
    }, 1200);

    setTimeout(() => {
      subtitle.style["opacity"] = "1";
    }, 1400);

    setTimeout(() => {
      buttons.style["opacity"] = "1";
    }, 1700);

    setTimeout(() => {
      skillsetTitle.style["opacity"] = "1";
    }, 2700);

    setTimeout(() => {
      showTags();
    }, 2900);
  }, []);

  const showTags = () => {
    const tags = document.querySelectorAll(".regular-tag");
    const specialTag = document.querySelector(".highlight-tag");
    let counter = 1;

    tags.forEach(tag => {
      setTimeout(() => {
        tag.style["opacity"] = "1";
      }, 100 * counter);
      counter++;
    });

    setTimeout(() => {
      specialTag.style["opacity"] = "1";
    }, 100 * counter);
  };

  return (
    <div id="home-banner">
      <div className="container px-5 px-md-3">
        <div className="row">
          <div className="d-flex flex-column align-items-md-start">
            <h2 className="font-weight-bold">Let's create something.</h2>
            <h3 className="font-weight-light">If it's code, I'm in.</h3>
          </div>
        </div>
        <p className="font-weight-lighter skillset-title">My skillset:</p>
        <div
          className="row justify-content-md-start mr-0 mt-2 align-content-end"
          id="home-tags"
        >
          <p className="regular-tag">Javascript</p>
          <p className="regular-tag">React/Redux</p>
          <p className="regular-tag">Ruby on Rails</p>
          <p className="regular-tag">Node + Express</p>
          <p className="regular-tag">HTML</p>
          <p className="regular-tag">CSS + Bootstrap</p>
          <p className="regular-tag">PostgreSQL</p>
          <p className="regular-tag">MongoDB</p>
          <p className="regular-tag">SQL</p>
          <p className="regular-tag">Git</p>
          <p className="regular-tag">Photoshop</p>
          <p className="regular-tag">Illustrator</p>
          <p className="regular-tag">InDesign</p>
          <p className="highlight-tag">
            And anything else I need to learn to get a job done
          </p>
        </div>
        <div
          id="home-btns"
          className="d-flex mr-0 justify-content-around align-items-center"
        >
          {/* <p onClick={showSkillset} className="home-btn">
                Skillset
              </p> */}
          <p className="home-btn">Why me?</p>
          <p className="home-btn">Projects</p>
          <p className="home-btn">Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
