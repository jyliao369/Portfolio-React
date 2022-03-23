import Resume from './resume.PDF';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <h1></h1>
            <nav className="links">
                <a href ="#projectpage">Past Projects</a>
                <a href ="#skillpage">Skills and Tools</a>
                <a href ="#contactpage">Contact Info</a>
                <a href ={Resume}>Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;