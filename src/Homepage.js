import AboutMePage from "./Aboutmepage";
import Contactpage from "./Contactpage";
import ProjectPage from "./Projectpage";
import Skillspage from "./Skillspage";

const Homepage = () => {
    
    return (
        <div className="homepage">
            <AboutMePage />
            <ProjectPage />
            <Skillspage />
            <Contactpage />
        </div>
    );
}

export default Homepage