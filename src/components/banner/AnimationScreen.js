import React from "react";
import classes from "./Banner.module.css";
import { MdPictureAsPdf } from "react-icons/md";
import TextAnimation from "./TextAnimation";

function AnimationScreen() {
  return (
    <div className="animate__animated animate__fadeIn">
      <span className={classes.tagline}>Welcome to my Portfolio</span>
      <h1>
        {`Hi! I'm Rahul Deshmukh`} <br />
      </h1>
      <TextAnimation />
      <p className={classes.p}>
        Eager to learn new technologies and dive deep in to a subject. Strong
        team player with effective interpersonal communication skills, willing
        to take responsibilities.
      </p>
      <button className={classes.vvd} onClick={() => console.log("connect")}>
        Download My Resume <MdPictureAsPdf size={25} />
      </button>
    </div>
  );
}

export default AnimationScreen;
