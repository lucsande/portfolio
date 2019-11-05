import React from "react";

const WhyMe = props => {
  return (
    <div id="why-me" className="hidden-content">
      <h2 className="font-weight-bold">Why hire me?</h2>
      <h3 className="font-weight-lighter">
        Not to brag or anything, but I do have quite a few qualities.
      </h3>
      <ul>
        <li>
          <span className="item-bold">I have a very logical mind.</span> This is
          one of the reasons I stood out as one of the best students during Le
          Wagon's Fullstack Bootcamp (even though my background was not an
          obvious one for programming);
        </li>
        <li>
          <span className="item-bold">I learn fast. And I love learning.</span>{" "}
          That's how I got admitted to Latin America's best university and also
          how I taught myself German, French and Spanish;
        </li>
        <li>
          <span className="item-bold">
            I think critically about the UX I implement.
          </span>{" "}
          My creative background taught me the importance of good UX and I am
          always attentive to that when coding, so I can contribute in product
          discussions;
        </li>
        <li>
          <span className="item-bold">I'm good at teamwork.</span> One of the
          best things I can say about myself is that most people who have worked
          with me once, expressed a desire to do it again in the future;
        </li>
        <li>
          <span className="item-bold">
            When I do something, I give it my all.
          </span>{" "}
          Former colleagues have multiple times highlighted my motivation about
          the things I do and ownership I have executing my tasks.
        </li>
        <li>
          <span className="item-bold">
            I identify knowledge gaps and fix them.
          </span>{" "}
          That's why the first thing I did after finishing Le Wagon's bootcamp
          was to learn React and Algorithms and Data Structures. And because I
          love learning.
        </li>
        <li>
          <span className="item-bold">
            I'm not afraid of new problems. Neither am I afraid of bugs.
          </span>{" "}
          I see them for what they are: an opportunity to learn something new or
          to get a better understanding of something I already know;
        </li>
      </ul>
    </div>
  );
};

export default WhyMe;
