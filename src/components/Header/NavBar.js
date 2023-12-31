import { useState, useEffect } from "react";
import { TbHexagonLetterD, TbHexagonLetterR } from "react-icons/tb";
import classes from "./Navbar.module.css";
import SocialIcons from "../ui/SocialIcons";
import Manu from "./Manu";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [manu, setmanu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header id="home">
      <div className={classes.header}>
        <div>
          <TbHexagonLetterR size={60} style={{ color: "white" }} />
          <TbHexagonLetterD size={60} style={{ color: "white" }} />
        </div>
        <span className="navbar-toggler-icon"></span>

        <div className={classes.nav}>
          <a
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </a>
          <a
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("projects")}
          >
            Projects
          </a>
        </div>
        <span className={classes.navbartext}>
          <SocialIcons />
        </span>
        <div>
          <a href="#connect">
            <button className={classes.vvd}>
              <span>Let’s Connect</span>
            </button>
          </a>
        </div>
        <div
          className={
            manu ? `${classes.toggle} ${classes.active}` : classes.toggle
          }
          onClick={() => setmanu(!manu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Manu onClick={() => setmanu(!manu)} manu={manu} />
      </div>
    </header>
  );
};

export default NavBar;
