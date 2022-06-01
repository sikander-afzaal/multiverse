import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Advantage.css";
import img from "../../Assets/about.png";
function Advantage() {
  return (
    <div className="advantage" id="advantage">
      <div className="t_left">
        <div className="top-util">
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={400}
            fraction={0}
          >
            <h1 className="title">What is Our Advantage?</h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p>Custom IP</p>
          </Fade>
        </div>
        <div className="text-div">
          <Fade triggerOnce direction="up" delay={700} duration={600}>
            <p className="desc">
              The hard part is already done - Multiverse Studio has built a
              custom IP that allows us to create and deploy AAA quality 3D games
              rapidly and seamlessly.
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={700} duration={1200}>
            <p className="desc">
              VR - we are virtual reality capable. Gods of Asgard will be the
              first play-to-earn in history with VR capability.
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={700} duration={1400}>
            <p className="desc">
              Ai - Our Ai named Annie, developed by Multiverse co-founder Ti is
              used in game…
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={700} duration={1700}>
            <p className="desc">
              Quick on board process - we have access to top talent which allows
              us to assemble a team around each project and build with quality
              but also speed.
            </p>
          </Fade>
        </div>
      </div>
      <div className="t_right">
        <Fade triggerOnce direction="right" duration={1000} delay={100}>
          <img className="advantage-img" src={img} alt="" />
        </Fade>
      </div>
    </div>
  );
}

export default Advantage;
