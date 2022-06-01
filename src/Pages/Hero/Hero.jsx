import React from "react";
import "./Hero.css";
import { Fade } from "react-awesome-reveal";
function Hero() {
  return (
    <div className={"hero"}>
      <Fade triggerOnce direction="down" duration={2000}>
        <div className="container-wrapper-hero">
          <h1 className="">MULTIVERSE STUDIO</h1>
          <p>Bringing Utility to Web 3</p>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
