import React from "react";
import classes from "./Project.module.css";
import ProjectItem from "./ProjectItem";
import TrackVisibility from "react-on-screen";
function ProjectType(props) {
  return (
    <div>
      <TrackVisibility>
        {({ isVisible }) => {
          return (
            <h4
              className={isVisible ? "animate__bounceIn" : "animate__bounceOut"}
            >
              {props.e.type}
            </h4>
          );
        }}
      </TrackVisibility>
      <div className={classes.flex}>
        {props.e.projects.map((e) => {
          return <ProjectItem key={e.title} e={e} />;
        })}
      </div>
    </div>
  );
}

export default ProjectType;
