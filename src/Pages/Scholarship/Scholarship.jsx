import React from "react";
import "./Scholarship.css";
import img from "../../Assets/scholar.png";
function Scholarship() {
  return (
    <div className="scholar">
      <img src={img} alt="" />
      <div className="right-scholar">
        <h2 className="title">Scholarship Program</h2>
        <p className="desc">
          Multiverse Studio build a scholarship marketplace for Gods of Asgard.
          Owners can rent their in game character within the marketplace for a
          revenue split with the renter.
        </p>
        <p className="desc">
          The scholarship program also solves the inclusively problem as it
          allows Gods of Asgard to be played by with no capital investment.
        </p>
      </div>
    </div>
  );
}

export default Scholarship;
