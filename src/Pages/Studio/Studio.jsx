import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Studio.css";
function Studio() {
  return (
    <div className="studio">
      <Fade
        triggerOnce
        direction="down"
        duration={1000}
        delay={400}
        fraction={0}
      >
        <h1 className="title">Multiverse Studio To the Rescue</h1>
      </Fade>

      <Fade
        triggerOnce
        direction="up"
        duration={1000}
        delay={1000}
        fraction={0}
        className="text-div"
      >
        <p className="desc">
          With our quick onboarding process we seamlessly assign an experienced
          project manager who will work with the client on discovery to build
          out a proper team.
        </p>
      </Fade>

      <div className="list-studio">
        <Fade
          triggerOnce
          duration={200}
          cascade={true}
          direction={"down"}
          className="list-div"
          delay={1000}
        >
          <p className="desc">1. Project Manager Assigned</p>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          delay={1250}
          cascade={true}
          direction={"down"}
          className="list-div"
        >
          <p className="desc">2. Discovery Calls</p>
          <p className="desc">- concept / creatives</p>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          delay={1450}
          cascade={true}
          direction={"down"}
          className="list-div"
        >
          <p className="desc">
            3. Build out Team (customized based talent required)
          </p>
          <p className="desc">- Solidity / Unity Developers</p>
          <p className="desc">- Modelist</p>
          <p className="desc">-Game designers</p>
          <p className="desc">- Animators</p>
          <p className="desc">- Music and composition</p>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          cascade={true}
          direction={"down"}
          className="list-div"
          delay={1650}
        >
          <p className="desc">4. Build Game</p>
          <p className="desc">- Involving clients at all times</p>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          cascade={true}
          direction={"down"}
          className="list-div"
          delay={1850}
        >
          <p className="desc">5. Launch and Manage</p>
          <p className="desc"> - Launch Game</p>
          <p className="desc">- Manage updates and maintenance</p>
        </Fade>
      </div>
    </div>
  );
}

export default Studio;
