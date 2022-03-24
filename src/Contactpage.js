import phoneIcon from "./images/icons8-phone.png";
import emailIcon from "./images/icons8-email.png";
import facebookIcon from "./images/icons8-facebook.png";
import githubIcon from "./images/icons8-github.png";
import linkedIcon from "./images/icons8-linkedin.png";
import twitterIcon from "./images/icons8-twitter.png";

const Contactpage = () => {
  return (
    <div className="contactpage" id="contactpage">
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
          <div class="links">
            <img src={emailIcon} alt="emailicon"></img>
            <p>
              Email:
              <a href="mailto:jyliao369@gmail.com">jyliao369@gmail.com</a>
            </p>
          </div>
          <div class="links">
            <img src={phoneIcon} alt="phoneicon"></img>
            <p>Phone #: (111) 123-4567</p>
          </div>
          <div class="links">
            <img src={githubIcon} alt="phoneicon"></img>
            <a href="https://github.com/jyliao369">GitHub</a>
          </div>
          <div class="links">
            <img src={linkedIcon} alt="phoneicon"></img>
            <a href="https://www.linkedin.com/in/justin-liao-64a75a17a/">
              LinkedIn
            </a>
          </div>
          <div class="links">
            <img src={twitterIcon} alt="phoneicon"></img>
            <a href="">Twitter</a>
          </div>
          <div class="links">
            <img src={facebookIcon} alt="phoneicon"></img>
            <a href="">Facebook</a>
          </div>
        </div>
        <div className="formSection">
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
              rows="11"
              placeholder="Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
