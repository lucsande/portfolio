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
          <span className="item-bold">I work for making a difference.</span> While 
          working for Chiligum Creatives, I was one of the two people who came up 
          with a solution for producing HTML banners in large scale. My contribution was
          fundamental for Chiligum Creatives getting its biggest client ever, Nissan, 
          and is also how I got my first promotion in the company;
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
          <span className="item-bold">
            I identify knowledge gaps and fix them.
          </span>{" "}
          That's why the first thing I did when I joined the Chiligum Creatives team was to start 
          studying AWS and Docker on my free time, so I would be familiar with all techonologies 
          being used and could make relevant contributions. And because I love learning.
        </li>
        <li>
          <span className="item-bold">I'm good at teamwork.</span> One of the
          best things I can say about myself is that most people who have worked
          with me once, expressed a desire to do it again in the future;
        </li>
        <li>
          <span className="item-bold">I have a very logical mind.</span> This is
          one of the reasons I stood out as one of the best students during Le
          Wagon's Fullstack Bootcamp (even though my background was not an
          obvious one for programming);
        </li>
        <li>
          <span className="item-bold">I learn fast. And I love learning.</span>{" "}
          That's how I got admitted to Latin America's best university and also
          how I taught myself German, French and Spanish. That's also how I got started
          with programming.
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
