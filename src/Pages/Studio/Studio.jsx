import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Studio.css";
import img1 from "../../Assets/studio-icons/number-1.svg";
import img2 from "../../Assets/studio-icons/number-2.svg";
import img3 from "../../Assets/studio-icons/number-3.svg";
import img4 from "../../Assets/studio-icons/number-4.svg";
import img5 from "../../Assets/studio-icons/number-5.svg";
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
          <>
            <img src={img1} alt="" className="studio-icon" />
            <div className="text-studio">
              <h2>1. Project Manager Assigned</h2>
            </div>
          </>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          delay={1250}
          cascade={true}
          direction={"down"}
          className="list-div"
        >
          <>
            <img className="studio-icon" src={img2} alt="" />
            <div className="text-studio">
              <h2>2. Discovery Calls</h2>
              <p className="desc">- concept / creatives</p>
            </div>
          </>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          delay={1450}
          cascade={true}
          direction={"down"}
          className="list-div"
        >
          <>
            <img className="studio-icon" src={img3} alt="" />
            <div className="text-studio">
              <h2>3. Build out Team (customized based talent required)</h2>
              <p className="desc">- Solidity / Unity Developers</p>
              <p className="desc">- Modelist</p>
              <p className="desc">-Game designers</p>
              <p className="desc">- Animators</p>
              <p className="desc">- Music and composition</p>
            </div>
          </>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          cascade={true}
          direction={"down"}
          className="list-div"
          delay={1650}
        >
          <>
            <img src={img4} className="studio-icon" alt="" />
            <div className="text-studio">
              <h2>4. Build Game</h2>
              <p className="desc">- Involving clients at all times</p>
            </div>
          </>
        </Fade>
        <Fade
          triggerOnce
          duration={200}
          cascade={true}
          direction={"down"}
          className="list-div"
          delay={1850}
        >
          <>
            <img src={img5} alt="" className="studio-icon" />
            <div className="text-studio">
              <h2>5. Launch and Manage</h2>
              <p className="desc"> - Launch Game</p>
              <p className="desc">- Manage updates and maintenance</p>
            </div>
          </>
        </Fade>
      </div>
    </div>
  );
}

export default Studio;
