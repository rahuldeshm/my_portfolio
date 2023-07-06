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

      <a
        href="https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/resume%2F05072023.pdf?alt=media&token=83893579-cc35-4c0b-bebe-c7fe785ab1b1"
        target="blank"
        className={classes.downloadlink}
        download
      >
        <button className={classes.vvd}>
          Download My Resume <MdPictureAsPdf size={25} />
        </button>
      </a>
    </div>
  );
}

export default AnimationScreen;
