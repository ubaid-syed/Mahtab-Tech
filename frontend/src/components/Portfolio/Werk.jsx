import React from "react";
import "./Werk.css"; // Assuming the CSS is saved in this file

const LearnMoreButton = () => {
  return (
    <div id="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </div>
  );
};

export default LearnMoreButton;
