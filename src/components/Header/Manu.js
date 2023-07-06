import React from "react";
import classes from "./Navbar.module.css";
import photo from "../../assets/Photrad.jpg";
import SocialIcons from "../ui/SocialIcons";

function Manu(props) {
  function closeHandler(e) {
    console.log("closeHandler");
    props.onClick();
  }
  return (
    <>
      <div
        onClick={closeHandler}
        className={props.manu ? classes.overley : classes.activeoverley}
      ></div>
      <div className={props.manu ? classes.manu : classes.activemanu}>
        <div className={classes.mainmanu}>
          <img src={photo} />
          <h2>Rahul Arun Deshmukh</h2>
          <a onClick={closeHandler} href="#home">
            Home
          </a>
          <a onClick={closeHandler} href="#skills">
            Skills
          </a>
          <a onClick={closeHandler} href="#projects">
            Projects
          </a>
          <a onClick={closeHandler} href="#connect">
            Contact Me
          </a>

          <SocialIcons />
        </div>
      </div>
    </>
  );
}

export default Manu;
