import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Problem.css";
import bg from "../../Assets/line.svg";
import pointerLeft from "../../Assets/left-icon.svg";
import pointerRight from "../../Assets/right-icon.svg";
function Problem() {
  return (
    <div id="problem" className="problem">
      <div className="top-util">
        <Fade
          triggerOnce
          direction="down"
          duration={1000}
          delay={400}
          fraction={0}
        >
          <h1 className="title">So Whats the Problem?</h1>
        </Fade>
        <Fade triggerOnce delay={400}>
          <p>They don’t know where to start!</p>
        </Fade>
      </div>
      <Fade triggerOnce delay={500} duration={1000} direction={"up"}>
        <p className="desc">
          Assuming the project has made the correct decision to explore and
          build out utility, majority don't know where to start!
        </p>
      </Fade>
      <Fade triggerOnce delay={900} duration={1000} direction={"up"}>
        <p className="desc">
          Building and developing a blockchain p2e game is not easy. For a
          project to build its own game they must go through the process of;
        </p>
      </Fade>

      <Fade triggerOnce duration={1000}>
        <div className="problem-image">
          <img className="problem-bg" src={bg} alt="" />

          <Fade
            triggerOnce
            className="pointer-div pointer-div1"
            direction="down"
            duration={1000}
            delay={1000}
          >
            <>
              <div className="left-pointer">
                <img src={pointerRight} alt="" className="pointer-img" />
                <img src={pointerLeft} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Finding talent (what skills are required?)</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div2"
          >
            <>
              <div className="left-pointer">
                <img src={pointerLeft} alt="" className="pointer-img" />{" "}
                <img src={pointerRight} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Hiring Developers</h4>
              </div>
            </>
          </Fade>

          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div3"
          >
            <>
              <div className="left-pointer">
                <img src={pointerRight} alt="" className="pointer-img" />{" "}
                <img src={pointerLeft} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Server setup and management</h4>
              </div>
            </>
          </Fade>

          <Fade
            triggerOnce
            className="pointer-div pointer-div4"
            direction="down"
            duration={1000}
            delay={1000}
          >
            <>
              <div className="left-pointer">
                <img src={pointerLeft} alt="" className="pointer-img" />{" "}
                <img src={pointerRight} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Game design</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div5"
          >
            <>
              <div className="left-pointer">
                <img src={pointerRight} alt="" className="pointer-img" />{" "}
                <img src={pointerLeft} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Modal design</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div6"
          >
            <>
              <div className="left-pointer">
                <img src={pointerLeft} alt="" className="pointer-img" />{" "}
                <img src={pointerRight} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>3D Animation</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div7"
          >
            <>
              <div className="left-pointer">
                <img src={pointerRight} alt="" className="pointer-img" />{" "}
                <img src={pointerLeft} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>Music and compositions</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div8"
          >
            <>
              <div className="left-pointer">
                <img src={pointerLeft} alt="" className="pointer-img" />{" "}
                <img src={pointerRight} alt="" className="pointer-img mobile" />
              </div>
              <div className="right-pointer">
                <h4>In game economy and tokenomics</h4>
              </div>
            </>
          </Fade>
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            className="pointer-div pointer-div9"
          >
            <>
              <div className="left-pointer">
                <img src={pointerRight} alt="" className="pointer-img" />
              </div>
              <div className="right-pointer">
                <h4>Finding the right project manager</h4>
              </div>
            </>
          </Fade>
        </div>
      </Fade>
      <Fade triggerOnce cascade={true} direction={"up"} duration={1500}>
        <p className="desc" style={{ maxWidth: "100%" }}>
          And A LOT MORE…
        </p>
        <p className="desc">
          Wanting to build a game is one thing, knowing how to build a game is
          another.
        </p>
      </Fade>
    </div>
  );
}

export default Problem;
