import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Market.css";
function Market() {
  return (
    <div className="market">
      <div className="market-cont">
        <div className="top-util">
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={400}
            fraction={0}
          >
            <h1 className="title">Top GameFi Titles</h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p>Game & Market Cap</p>
          </Fade>
        </div>
        <div className="market-grid grid1">
          <Fade
            triggerOnce
            delay={800}
            duration={1200}
            cascade
            direction="down"
          >
            <div className="market-box">
              <h3>Axie</h3>
              <p>$4.1 B</p>
            </div>
            <div className="market-box">
              <h3>X World Games</h3>
              <p>$837 M</p>
            </div>
            <div className="market-box">
              <h3>Defi Kingdoms</h3>
              <p>$499 M</p>
            </div>
            <div className="market-box">
              <h3>MOBOX Farmer</h3>
              <p>$348 M</p>
            </div>
            <div className="market-box">
              <h3>Alien Worlds</h3>
              <p>$159 M</p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="market-cont">
        <div className="top-util">
          <Fade
            triggerOnce
            direction="down"
            duration={1000}
            delay={400}
            fraction={0}
          >
            <h1 className="title">Sky Mavis</h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p>Axie Infinity</p>
          </Fade>
        </div>
        <div className="market-grid grid2">
          <Fade
            triggerOnce
            delay={800}
            duration={1200}
            cascade
            direction="down"
          >
            <div className="market-box">
              <h3>Revenue</h3>
              <p>$464.8 million (Oct, 2021)</p>
            </div>
            <div className="market-box">
              <h3>Daily Active Users</h3>
              <p> 1.85 million ( Oct, 2021)</p>
            </div>
            <div className="market-box">
              <h3>Holders</h3>
              <p>3.2 million (Oct, 2021)</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Market;
