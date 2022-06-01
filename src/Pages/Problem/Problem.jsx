import React from "react";
import "./Problem.css";
import bg from "../../Assets/roadmap-bg.png";
import pointer from "../../Assets/pointer.png";
function Problem() {
  return (
    <div id="problem" className="problem">
      <div className="top-util">
        <h1 className="title">So Whats the Problem?</h1>
        <p>They don’t know where to start!</p>
      </div>
      <p className="desc">
        Assuming the project has made the correct decision to explore and build
        out utility, majority don't know where to start!
      </p>
      <p className="desc">
        Building and developing a blockchain p2e game is not easy. For a project
        to build its own game they must go through the process of;
      </p>
      <div className="problem-image">
        <img className="problem-bg" src={bg} alt="" />
        <div className="pointer-div pointer-div1">
          <div className="left-pointer">
            <img src={pointer} alt="" className="pointer-img" />
          </div>
          <div className="right-pointer">
            <h4>Finding talent (what skills are required?)</h4>
          </div>
        </div>
        <div className="pointer-div pointer-div2">
          <div className="left-pointer">
            <img src={pointer} alt="" className="pointer-img" />
          </div>
          <div className="right-pointer">
            <h4>Hiring Developers</h4>
          </div>
        </div>
        <div className="pointer-div pointer-div3">
          <div className="left-pointer">
            <img src={pointer} alt="" className="pointer-img" />
          </div>
          <div className="right-pointer">
            <h4>Server setup and management</h4>
          </div>
        </div>
        <div className="pointer-div pointer-div4">
          <div className="left-pointer">
            <img src={pointer} alt="" className="pointer-img" />
          </div>
          <div className="right-pointer">
            <h4>Game design</h4>
          </div>
        </div>
        <div className="pointer-div pointer-div5">
          <div className="left-pointer">
            <img src={pointer} alt="" className="pointer-img" />
          </div>
          <div className="right-pointer">
            <h4>Modal design</h4>
          </div>
        </div>
      </div>
      <p className="desc">And A LOT MORE…</p>
      <p className="desc">
        Wanting to build a game is one thing, knowing how to build a game is
        another.
      </p>
    </div>
  );
}

export default Problem;
