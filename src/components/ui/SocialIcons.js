import React from "react";
import classes from "./SocialIcons.module.css";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

function SocialIcons() {
  return (
    <div className={classes.socialicon}>
      <a href="https://github.com/rahuldeshm">
        <button>
          <div className={classes.icon}>
            <FiGithub size={25} />
          </div>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/rahul-deshmukh-498a66205/">
        <button>
          <div className={classes.icon}>
            <AiOutlineLinkedin size={25} />
          </div>
        </button>
      </a>
      <a href="https://leetcode.com/rahuldeshmukh4545/">
        <button>
          <div className={classes.icon}>
            <SiLeetcode size={25} />
          </div>
        </button>
      </a>
    </div>
  );
}

export default SocialIcons;
