import React from "react";
import classes from "./Skills.module.css";
import TrackVisibility from "react-on-screen";

function Skill(props) {
  return (
    <div className={classes.skilldiv}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={classes.fill}
            style={isVisible ? { width: `${props.e.pers}%` } : { width: "10%" }}
          ></div>
        )}
      </TrackVisibility>
      {props.e.name}
    </div>
  );
}

export default Skill;
