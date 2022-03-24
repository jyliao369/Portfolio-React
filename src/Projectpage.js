import FeedImg from "./images/feedit.jpg";
import WeatherImg from "./images/weather.jpg";
import QuizImg from "./images/quiz.jpg";
import RetroImg from "./images/retrogame.jpg";
import ManagerImg from "./images/manager.jpg";
import PlanImg from "./images/planner.jpg";

const ProjectPage = () => {
  const projectList = [
    {
      id: 1,
      name: "FeedIt",
      github: "https://github.com/jyliao369/FeedIt",
      image: FeedImg,
    },
    {
      id: 2,
      name: "Weather Dash",
      github: "https://github.com/jyliao369/Weather_Dash",
      image: WeatherImg,
    },
    {
      id: 3,
      name: "Quiz Show",
      github: "https://github.com/jyliao369/Quiz-Show",
      image: QuizImg,
    },
    {
      id: 4,
      name: "RGMarket",
      github: "https://github.com/jyliao369/GameStore",
      image: RetroImg,
    },
    {
      id: 5,
      name: "Planner",
      github: "https://github.com/jyliao369/Planner-Application",
      image: PlanImg,
    },
    {
      id: 6,
      name: "Manager App",
      github: "https://github.com/jyliao369/Team-Profile-Generator",
      image: ManagerImg,
    },
  ];

  return (
    <div className="projectpage">
      <h1> My Projects</h1>
      <div className="projectcardlist">
        {projectList.map((projectList) => (
          <div className="card">
            <div className="cardimage">
              <img src={projectList.image} alt=""></img>
            </div>
            <div className="cardinfo" key={projectList.id}>
              <a href={projectList.github}> {projectList.name}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
