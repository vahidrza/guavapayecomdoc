import React from "react";
import "./container.css";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

function Container() {
  return (
    <div className="container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default Container;
