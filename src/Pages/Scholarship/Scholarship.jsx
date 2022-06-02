import React from "react";
import "./Scholarship.css";
import img from "../../Assets/scholar.png";
import { Fade } from "react-awesome-reveal";
function Scholarship() {
  return (
    <div className="scholar">
      <Fade className="first-div" triggerOnce delay={400} duration={1000}>
        <img src={img} alt="" />
      </Fade>

      <div className="right-scholar">
        <Fade
          triggerOnce
          direction="down"
          duration={1000}
          delay={400}
          fraction={0}
        >
          <h2 className="title">Scholarship Program</h2>
        </Fade>
        <Fade triggerOnce direction="up" delay={700} duration={600}>
          <p className="desc">
            Multiverse Studio build a scholarship marketplace for Gods of
            Asgard. Owners can rent their in game character within the
            marketplace for a revenue split with the renter.
          </p>
        </Fade>
        <Fade triggerOnce direction="up" delay={700} duration={600}>
          <p className="desc">
            The scholarship program also solves the inclusively problem as it
            allows Gods of Asgard to be played by with no capital investment.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Scholarship;
