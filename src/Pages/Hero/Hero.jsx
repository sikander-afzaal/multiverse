import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Hero.css";
import vid from "../../Assets/hero-video.mp4";
import logo from "../../Assets/logo.svg";
function Hero() {
  return (
    <div className={"hero"}>
      <video src={vid} controls={false} loop autoPlay muted />
      <Fade triggerOnce direction="down" duration={2000}>
        <div className="container-wrapper-hero">
          <img src={logo} alt="" className="logo" />
          <p>Bringing Utility to Web 3</p>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
