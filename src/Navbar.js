import Resume from "./resume.PDF";

const Navbar = () => {
  return (
    <div class="navbar">
      <h1>Justin Liao</h1>
      <nav className="links">
        <a href="">About Me</a>
        <a href="#projectpage">Past Projects</a>
        <a href="#skillpage">Skills and Tools</a>
        <a href="#contactpage">Contact Info</a>
        <a href={Resume}>Resume</a>
      </nav>
    </div>
  );
};

export default Navbar;
