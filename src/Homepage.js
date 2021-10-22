import AboutMePage from "./Aboutmepage";
import ProjectPage from "./Projectpage";
import Skillspage from "./Skillspage";

const Homepage = () => {
    
    return (
        <div className="homepage">
            <AboutMePage />
            <ProjectPage />
            <Skillspage />
        </div>
    );
}

export default Homepage