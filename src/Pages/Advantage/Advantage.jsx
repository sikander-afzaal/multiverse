import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Advantage.css";
import img from "../../Assets/about.png";
function Advantage() {
  return (
    <div className="advantage" id="advantage">
      <Fade direction="left" duration={1000} delay={100} triggerOnce>
        <div className="t_left">
          <div className="top-util">
            <h1 className="title">What is Our Advantage?</h1>
            <p>Custom IP</p>
          </div>

          <div className="text-div">
            <p className="desc">
              The hard part is already done - Multiverse Studio has built a
              custom IP that allows us to create and deploy AAA quality 3D games
              rapidly and seamlessly.
            </p>
            <p className="desc">
              VR - we are virtual reality capable. Gods of Asgard will be the
              first play-to-earn in history with VR capability.
            </p>
            <p className="desc">
              Ai - Our Ai named Annie, developed by Multiverse co-founder Ti is
              used in game…
            </p>
            <p className="desc">
              Quick on board process - we have access to top talent which allows
              us to assemble a team around each project and build with quality
              but also speed.
            </p>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce direction="right" duration={1000} delay={100}>
        <div className="t_right">
          <img className="advantage-img" src={img} alt="" />
        </div>
      </Fade>
    </div>
  );
}

export default Advantage;
