import './css/About.css';

export default function About() {
  return (
    <div className="about-section">
      <h2 className="about-title">About <span>Me</span></h2>

      <p className="about-intro">
        Passionate <span className="highlight"> Full Stack Developer</span> excited to build modern web applications.
      </p>

      <p>
        With hands-on experience in <em>JavaScript</em>, <em>React</em>, <em>Core Java</em>, and 
        <em> Spring Boot</em>, I enjoy turning ideas into impactful solutions and continuously expanding my knowledge.
      </p>

      <p>
        My work demonstrates my adaptability and dedication to solving real-world problems using <em>modern technologies</em>.
      </p>

      <h3 className="tech-heading">Technologies I'm proficient in:</h3>
      <div className="tech-list">
        <ul>
          <li>Java</li>
          <li>SpringBoot</li>
          <li>MySQL </li>
          <li>Postman</li>
        </ul>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>REST APIs</li>
          {/* <li>Jira</li> */}
        </ul>
      </div>

      <a href="https://drive.google.com/file/d/1egbN2E-XCxssQFEs5fL5axd2ZXOISc_G/view?usp=drivesdk" target='' download className="resume-btn">Download Resume</a>
    </div>
  );
}
