import WelcomePage from "./Welcomepage";
import AboutMePage from "./Aboutmepage";
import Contactpage from "./Contactpage";
import ProjectPage from "./Projectpage";
import Skillspage from "./Skillspage";

const Homepage = () => {
  return (
    <div className="homepage">
      <WelcomePage />
      <AboutMePage />
      <Skillspage />
      <ProjectPage />
      <Contactpage />
    </div>
  );
};

export default Homepage;
