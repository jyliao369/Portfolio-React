import JavascriptIcon from "./images/javascript.png";
import HTMLIcon from "./images/HTML5.png";
import CSSIcon from "./images/CSS.png";
import NodeIcon from "./images/node-js.png";
import MySQLIcon from "./images/mysql.png";
import GitIcon from "./images/git.png";
import MongoIcon from "./images/mongo.png";
import ReactIcon from "./images/react.png";

const Skillspage = () => {
  const skillslist = [
    { skill: "Javascript", icon: JavascriptIcon },
    { skill: "NodeJS", icon: NodeIcon },
    { skill: "HTML", icon: HTMLIcon },
    { skill: "CSS", icon: CSSIcon },
    { skill: "Git", icon: GitIcon },
    { skill: "MySql", icon: MySQLIcon },
    { skill: "MangoDB", icon: MongoIcon },
    { skill: "React", icon: ReactIcon },
  ];

  return (
    <div className="skillpage" id="skillpage">
      <div class="skillCon">
        <h1>Skills & Tools</h1>
        <div className="skillslist">
          {skillslist.map((skillslist) => (
            <div className="icon">
              <img src={skillslist.icon} className="icons" alt="toolsImg"></img>
              <p>{skillslist.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillspage;
