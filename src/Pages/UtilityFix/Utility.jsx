import React from "react";
import Tilt from "react-parallax-tilt";

import "./Utility.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import UtilCardImg1 from "../../Assets/islandCardImg1.png";
import UtilCardImg2 from "../../Assets/islandCardImg2.png";
import UtilCardImg3 from "../../Assets/islandCardImg3.png";
import UtilCardImg4 from "../../Assets/islandCardImg4.png";
const UtilCard = ({ img, title, imgStyles }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="lightblue"
      glarePosition="all"
      style={{ borderRadius: "inherit" }}
      className={"islandCardWrapper"}
    >
      <div className={"islandCard"}>
        <img src={img} style={imgStyles} alt="" />
        <p>{title}</p>
      </div>
    </Tilt>
  );
};

function Utility() {
  return (
    <div className="utility">
      <div className="top-util">
        <h1 className="title">Solving the Utility Problem</h1>
        <p>“No, a hoodie is not considered ‘utility’”.</p>
      </div>
      <p className="desc">
        Many projects have built amazing communities, however, there will come a
        point in time where a project is forced to provide utility to its users
        and community.
      </p>
      <div className="box-div">
        <h2>Building Utility Allows A Project To</h2>
        <div className="box-grid">
          <UtilCard
            title="Create additional revenue streams"
            img={UtilCardImg1}
            imgStyles={{ maxWidth: "257px" }}
          />
          <UtilCard title="Hold its value (floor price)" img={UtilCardImg2} />
          <UtilCard
            title="Keep current community engage. Make them feel apart of the process."
            img={UtilCardImg3}
          />
          <UtilCard title="Asset ownership" img={UtilCardImg4} />
          <UtilCard title="Player Reward Models" img={UtilCardImg4} />
          <UtilCard title="Expand community" img={UtilCardImg4} />
        </div>
      </div>
    </div>
  );
}

export default Utility;
