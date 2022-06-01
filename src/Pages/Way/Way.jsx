import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Way.css";
function Way() {
  return (
    <div className="way">
      <Fade fraction={1} triggerOnce direction={"down"} duration={1000}>
        <h1 className="title">Leading The Way</h1>
      </Fade>

      <div className="text-div">
        <Fade
          fraction={1}
          triggerOnce
          direction={"up"}
          duration={500}
          delay={300}
        >
          <p className="desc">
            Multiverse Studio is leading the way into the world of blockchain
            gaming by building AAA quality play-to-earn games for select
            projects creating immense value and utility for Web3 communities.
          </p>
        </Fade>
        <Fade
          fraction={1}
          triggerOnce
          direction={"up"}
          duration={500}
          delay={600}
        >
          <p className="desc">
            For play-to-earn gaming to one day be known simply as ‘gaming’, Web2
            gamers should not have to sacrifice quality, gameplay and escapism
            in Web3. Multiverse is here to support the transition of Web2 gamers
            to Web3 without sacrifice, and that is our mission.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Way;
