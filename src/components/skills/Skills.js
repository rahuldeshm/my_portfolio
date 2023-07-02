import colorSharp from "../../assets/img/color-sharp.png";
import classes from "./Skills.module.css";
import SkillType from "./SkillType";
const list = [
  {
    name: "Basic Coding Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    name: "Frontend Skills",
    skills: [
      "ReactJs",
      "React-Router",
      "Bootstrap",
      "Redux",
      "Axios",
      "Firebase",
    ],
  },
  {
    name: "Backend Skills",
    skills: ["NodeJs", "ExpressJs", "SQL", "mySQL", "MongoDB", "Sequelize"],
  },
  { name: "Fullstack Framework", skills: ["NextJs"] },
  { name: "Version Control", skills: ["Git", "GitHub"] },
];
export const Skills = () => {
  return (
    <section className={classes.skill} id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className={classes.maindiv}>
          {list.map((e) => (
            <SkillType key={e.name} e={e} />
          ))}
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
