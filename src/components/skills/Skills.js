import classes from "./Skills.module.css";
import SkillType from "./SkillType";
import Robo from "../../assets/png/seeingrobo.png";
const list = [
  {
    name: "Basic Coding Languages",
    skills: [
      { name: "HTML", pers: "99" },
      { name: "CSS", pers: "95" },
      { name: "JavaScript", pers: "97" },
      { name: "Python", pers: "98" },
    ],
  },
  {
    name: "Version Control, Fullstack Framework",
    skills: [
      { name: "Git", pers: "94" },
      { name: "GitHub", pers: "98" },
      { name: "NextJs", pers: "89" },
    ],
  },
  {
    name: "Frontend Skills",
    skills: [
      { name: "ReactJs", pers: "95" },
      { name: "React-Router", pers: "98" },
      { name: "Bootstrap", pers: "90" },
      { name: "Redux", pers: "99" },
      { name: "Axios", pers: "91" },
      { name: "Firebase", pers: "92" },
    ],
  },
  {
    name: "Backend Skills",
    skills: [
      { name: "NodeJs", pers: "90" },
      { name: "ExpressJs", pers: "99" },
      { name: "SQL", pers: "91" },
      { name: "mySQL", pers: "93" },
      { name: "MongoDB", pers: "85" },
      { name: "Sequelize", pers: "96" },
    ],
  },
];
export const Skills = () => {
  return (
    <section className={classes.skill} id="skills">
      <h2>Skills</h2>
      <div className={classes.flex}>
        <div className={classes.robo}>
          <div className={classes.left}></div>
          <div className={classes.right}></div>
          <img src={Robo} alt="seeing robo to the skills"></img>
        </div>
        <div className={classes.containe}>
          <div className={classes.maindiv}>
            {list.map((e) => (
              <SkillType key={e.name} e={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
