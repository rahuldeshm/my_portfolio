import React, { useState } from "react";
import "animate.css";
import classes from "./Project.module.css";
import TrackVisibility from "react-on-screen";
import Images from "./Images";
import Key from "./Key";

function ProjectItem(props) {
  const [show, setShow] = useState(false);
  const indclass = props.e.class;

  return (
    <div className={`${classes.item} ${classes[indclass]}`}>
      <div className={classes.projecttext}>
        <TrackVisibility>
          {({ isVisible }) => {
            return (
              <h4
                className={
                  isVisible ? "animate__bounceIn" : "animate__bounceOut"
                }
              >
                {props.e.title}
              </h4>
            );
          }}
        </TrackVisibility>

        {props.e.keys.map((e, index) => {
          return <Key e={e} key={`${Math.random()}${index}`} />;
        })}
        <ul>
          {props.e.description.map((e, index) => {
            return <li key={`${Math.random()}${index}`}>{e}</li>;
          })}
        </ul>
      </div>
      <a href={props.e.link} target="blank" className={classes.link}>
        link
      </a>
      <div className={classes.projectimg}>
        <img
          onClick={() => setShow(!show)}
          src={props.e.imgUrl[0]}
          alt="Project"
        />
      </div>
      {show && <Images list={props.e.imgUrl} onClose={() => setShow(!show)} />}
    </div>
  );
}

export default ProjectItem;
