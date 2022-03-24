import Resume from "./resume.PDF";

const Contactpage = () => {
  return (
    <div className="contactpage">
      <div class="contactHeader">
        <p>Contact Info</p>
        <h1>Get In Touch</h1>
        <div class="closingSen">
          <p>
            I love to hear your thoughts about me!!! I look forward to bringing
            your projects and ideas to life and learning new skills along the
            way!
          </p>
        </div>
      </div>
      <div className="contactsection">
        <div class="sociallinks">
          <p>
            Email: <a href="mailto:jyliao369@gmail.com">jyliao369@gmail.com</a>
          </p>
          <p>Phone #: (111) 123-4567</p>
          <a href="https://github.com/jyliao369">GitHub</a>
          <a href="https://www.linkedin.com/in/justin-liao-64a75a17a/">
            LinkedIn
          </a>
          <a href="">Twitter</a>
          <a href="">Facebook</a>
          <a href={Resume} id="resume">
            Resume
          </a>
        </div>
        <div className="formSection">
          <h2>Leave a Message</h2>
          <form className="form">
            <input class="nameForm" type="text" required placeholder="Name" />
            <input
              class="emailForm"
              type="text"
              required
              placeholder="E-Mail"
            />
            <input
              class="phoneForm"
              type="text"
              required
              placeholder="Phone #"
            />
            <textarea
              class="messageForm"
              type="text"
              required
              rows="5"
              placeholder="Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
