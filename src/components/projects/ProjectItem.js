import React from "react";
import "animate.css";
import classes from "./Project.module.css";
import Images from "./Images";

function ProjectItem(props) {
  return (
    <div className={classes.projecttype}>
      <h6>{props.e.title}</h6>
      <p>{props.e.description}</p>
      {/* <Images list={props.e.imgUrl} /> */}
    </div>
  );
}

export default ProjectItem;
