import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Revenue.css";
import img from "../../Assets/revenue.svg";
import img2 from "../../Assets/revenue2.svg";
function Revenue() {
  return (
    <div className="revenue">
      <div className="revenue-cont">
        <div className="top-util">
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={400}
            fraction={0}
          >
            <h1 className="title">Revenue Model</h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p>Build Fee & Equity</p>
          </Fade>
        </div>
        <Fade triggerOnce duration={1000} delay={800} fraction={0}>
          <>
            <img src={img} alt="" className="reven-img" />
          </>
        </Fade>
      </div>
      <div className="revenue-cont">
        <div className="top-util">
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={400}
            fraction={0}
          >
            <h1 className="title">Multiverse Revenue</h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p>Jan 2022 - May 2022</p>
          </Fade>
        </div>
        <Fade triggerOnce duration={1000} delay={800} fraction={0}>
          <>
            <img src={img2} alt="" className="reven-img" />
          </>
        </Fade>
      </div>
    </div>
  );
}

export default Revenue;
