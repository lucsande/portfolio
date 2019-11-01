import React from "react";

const WhyMe = props => {
  if (props.tab !== "why") {
    return null;
  }

  return (
    <div>
      <div className="info-header">
        <h4>Why hire me?</h4>
        <hr />
      </div>
      <div className="info-body mt-4 px-4">
        <p>
          I may not have much professional experience with web development -
          yet. But I do have a ton of other qualities:
        </p>

        <ul className="text-secondary">
          <li>
            <span className="font-weight-bold text-dark">
              I have a very logical mind.
            </span>{" "}
            This characteristic is one of the reasons I stood out as one of the
            best students during Le Wagon's Fullstack Bootcamp;
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              I learn fast. And I love learning.
            </span>{" "}
            That's how I got admitted to Latin America's best university and one
            of the main reason I got two raises in my previous job. That's also
            why I taught myself German, French and Spanish;
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              I think critically about the UX I implement.
            </span>{" "}
            My creative background taught me the importance of good UX and I am
            always attentive to that when coding;
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              I am nice to work with.
            </span>{" "}
            One of the best things I can say about myself is that most people
            who have worked with me once, expressed a desire to do it again in
            the future;
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              When I do something, I give it my all.
            </span>{" "}
            People have multiple times described my motivation in the things I
            do as "obsessive".
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              I identify knowledge gaps and fix them.
            </span>{" "}
            That's why the first thing I did after finishing Le Wagon's bootcamp
            was to learn React. That's also why I am currently learning{" "}
            <span className="font-weight-bold text-dark">
              Algorithms and Data Structures
            </span>
            , so I can make up for my lack of a Computer Science degree;
          </li>
          <li>
            <span className="font-weight-bold text-dark">
              I'm not afraid of new problems. Neither am I afraid of bugs.
            </span>{" "}
            I see them for what they are: an opportunity to learn something new
            or to get a better understanding of something I already know;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyMe;
