import React from "react";
import { Fade } from "react-awesome-reveal";

import "./Roadmap.css";
import avatar1 from "../../Assets/avatars/phase-1.svg";
import avatar2 from "../../Assets/avatars/phase-2.svg";
import avatar3 from "../../Assets/avatars/phase-3.svg";

const RoadmapCard = ({ subhead, points, title, img, isActive = false }) => {
  return (
    <div className={`RoadmapCard ${isActive ? "active" : ""}`}>
      <div className={"profile"}>
        <div className={"circleAndLine"}>
          <img src={img} className={"avatar"} alt="" />
          <div className={"imgLine"}></div>
          <div className={"imgCircle"}></div>
        </div>
      </div>
      <div className={"content"}>
        <div className={"line"}></div>
        <div>
          <h1>{title}</h1>
          <p className="sub-head">{subhead}</p>
          <ul className={"points"}>
            {points.map((point, index) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <div>
      <Fade cascade triggerOnce>
        <div className="container-wrapper">
          <h1 className="title">Roadmap</h1>
        </div>

        <div className={"cards"}>
          <RoadmapCard
            title="Phase 1"
            img={avatar1}
            points={[
              "Launch Gods of Asgard for Thor Financial. The first real AAA quality game across all chains. The launch of GoA is set to establish our credibility across the Web3 community.",
            ]}
            subhead="Establish Credibility"
          />
          <RoadmapCard
            title="Phase 2"
            img={avatar2}
            isActive={true}
            points={[
              "Onboard blue chip projects with large communities in place. Build value and utility through gaming.",
            ]}
            subhead="Onboard Blue Chip Projects"
          />
          <RoadmapCard
            title="Phase 3"
            img={avatar3}
            points={[
              "During phase 3 we will begin the process of developing in-house games. We will focus on AAA quality games but also mobile games.",
              "At this point we will launch our own token $MLTI which will be the governance token for ALL in house games. ",
            ]}
            subhead="Develop In House Games"
          />
        </div>
      </Fade>
    </div>
  );
}

export default Roadmap;
