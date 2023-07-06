import React from "react";
import Skill from "./Skill";
import classes from "./Skills.module.css";

function SkillType(props) {
  return (
    <div className={classes.typediv}>
      <h4>{props.e.name}</h4>
      {props.e.skills.map((e) => {
        return <Skill key={e.name} e={e} />;
      })}
    </div>
  );
}

export default SkillType;
