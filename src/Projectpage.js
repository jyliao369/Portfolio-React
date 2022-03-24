import FeedImg from "./images/feedit.jpg";
import RetroImg from "./images/retrogame.jpg";
import iHealthy from "./images/iHealthy.JPG";
import windie from "./images/windie.JPG";
import mmmbook from "./images/mmmbook.JPG";
import todolist from "./images/todolist.JPG";

import githubIcon from "./images/icons8-github.png";
import linkIcon from "./images/icons8-link-90.png";

const ProjectPage = () => {
  const projectList = [
    {
      id: 1,
      name: "FeedIt",
      github: "https://github.com/jyliao369/FeedIt",
      deployed: "https://jyliao369.github.io/FeedIt/",
      image: FeedImg,
      type: "JavaScript",
    },
    {
      id: 6,
      name: "RGMarket Retro Store",
      github: "https://github.com/Andydchoo/Retro-Game-Market",
      deployed: "https://retro-game-market.herokuapp.com/",
      image: RetroImg,
      type: "JavaScript",
    },
    {
      id: 2,
      name: "mmm!Book",
      github: "https://github.com/jyliao369/MyCookBook",
      deployed: "https://mmmbook.herokuapp.com/",
      image: mmmbook,
      type: "React.JS",
    },
    {
      id: 3,
      name: "windie",
      github: "https://github.com/jyliao369/weatherDash",
      deployed: "https://jyliao369.github.io/weatherDash/#/",
      image: windie,
      type: "React.JS",
    },
    {
      id: 4,
      name: "iHealthy",
      github: "https://github.com/jyliao369/SymptomChecker",
      deployed: "https://jyliao369.github.io/SymptomChecker/",
      image: iHealthy,
      type: "Vue.JS",
    },
    {
      id: 5,
      name: "To-Do-List App",
      github: "https://github.com/jyliao369/TodoAppVue",
      deployed: "https://jyliao369.github.io/TodoAppVue/",
      image: todolist,
      type: "Vue.JS",
    },
  ];

  return (
    <div className="projectpage" id="projectpage">
      <h1> My Projects</h1>
      <div className="projectcardlist">
        {projectList.map((projectList) => (
          <div className="card">
            <div className="cardimage">
              <img src={projectList.image} alt=""></img>
            </div>
            <div className="cardinfo" key={projectList.id}>
              <h2>{projectList.name}</h2>
              <div>
                <a href={projectList.github}>
                  <img
                    class="projectIcon"
                    src={githubIcon}
                    alt="githubIcon"
                  ></img>
                </a>
                <a href={projectList.deployed}>
                  <img class="projectIcon" src={linkIcon} alt="linkIcon"></img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
