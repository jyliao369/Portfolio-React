import profilePic from "./images/pic.jpg";

const AboutMePage = () => {
  return (
    <div className="aboutmepage" id="aboutmepage">
      <div class="profilePic">
        <img src={profilePic} alt="profilePic"></img>
        <div class="background2"></div>
      </div>
      <div className="infosection">
        <p>Who am I...</p>
        <h1>About Me</h1>
        <br />
        <br />
        <p class="info1">
          I'm Justin Liao, a creative and enthusiastic application and web
          developer. Prior to becoming a web developer, I pursued a career in
          medicine with hopes of using my knowledge and skills to make help make
          a positive impact. With brand new set of skills and knowledge I hope
          to do the same and create meaningful applications and projects that
          have large positve impact.
        </p>
        <p class="info2">
          I am skilled in many languages of web development and have made many
          projects and sites through the lanaguags of HTML, CSS, JavaScript and
          more. I have also worked extensively on Back-End languages and frame
          works as well. Even with learning so many languages and frameworks, I
          am charged and excited to learn more as the world of IT and Web
          Developement continues to evovlve.
        </p>
        <p class="info3">
          Diligent, hardworking and self-motivated, I am always looking for the
          next challenge, the next big idea that can have large positive
          implications. I always work towards achieving best result on each
          project and I welcome any challenge, big or small.
        </p>
        <div>
          <button class="resumeBtn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
