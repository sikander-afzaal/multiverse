import React from "react";
import "./Studio.css";
function Studio() {
  return (
    <div className="studio">
      <h1 className="title">Multiverse Studio To the Rescue</h1>
      <div className="text-div">
        <p className="desc">
          With our quick onboarding process we seamlessly assign an experienced
          project manager who will work with the client on discovery to build
          out a proper team.
        </p>
      </div>
      <div className="list-studio">
        <div className="list-div">
          <p className="desc">1. Project Manager Assigned</p>
        </div>
        <div className="list-div">
          <p className="desc">2. Discovery Calls</p>
          <p className="desc">- concept / creatives</p>
        </div>
        <div className="list-div">
          <p className="desc">
            3. Build out Team (customized based talent required)
          </p>
          <p className="desc">- Solidity / Unity Developers</p>
          <p className="desc">- Modelist</p>
          <p className="desc">-Game designers</p>
          <p className="desc">- Animators</p>
          <p className="desc">- Music and composition</p>
        </div>
        <div className="list-div">
          <p className="desc">4. Build Game</p>
          <p className="desc">- Involving clients at all times</p>
        </div>
        <div className="list-div">
          <p className="desc">5. Launch and Manage</p>
          <p className="desc"> - Launch Game</p>
          <p className="desc">- Manage updates and maintenance</p>
        </div>
      </div>
    </div>
  );
}

export default Studio;
