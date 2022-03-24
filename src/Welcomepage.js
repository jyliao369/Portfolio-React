import WebDev from "./images/WebDev.png";

const Welcomepage = () => {
  return (
    <div class="introContainer">
      <div class="introSection">
        <p class="intro">HELLO THERE 👋!! I'M</p>
        <h1>Justin Liao</h1>
        <p class="position">FULL STACK DEVELOPER, ENGINEER 👨‍💻</p>
        <p class="smIntro">
          I am a professional and creative Full Stack Developer with an emphasis
          on both Front-End and Back-End aspects of web development
        </p>
        <p>
          Take a look around!! I look forward to getting to know and work with
          you!!
        </p>
      </div>
      <div>
        <img src={WebDev} alt="welcomeImage"></img>
      </div>
    </div>
  );
};

export default Welcomepage;
