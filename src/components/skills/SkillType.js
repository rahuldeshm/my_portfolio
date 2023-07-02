import React from "react";
import Skill from "./Skill";

function SkillType(props) {
  return (
    <div>
      SkillType
      {props.e.skills.map((e) => (
        <Skill key={e} e={e} />
      ))}
    </div>
  );
}

export default SkillType;
