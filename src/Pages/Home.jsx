import './css/Home.css';
import profilePic from '../assets/PGirl.png';
import { useEffect, useState } from 'react';

export default function Home() {
  const roles = ['Coder', 'Technology User', ' Developer','Problem Solver','Analyzer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % roles.length);
        setFade(true); // start fade-in
      }, 300); // duration of fade-out
    }, 2500); // total duration between transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

        <div className="home-right">
        <img src={profilePic} alt="Anushka Itape" className="profile-img float-img" />
      </div>

      <div className="home-left">
        <p className="hello">HELLO!</p>
        <h1>
          I'm <span className="highlight">Anushka</span><br />Itape
        </h1>
        <p className={`animated-role ${fade ? 'fade-in' : 'fade-out'}`}>
          {roles[currentIndex]}
        </p>
        <p className="subtitle">Full Stack Developer</p>
        <div className="buttons">
          {/* <a href="https://www.linkedin.com/in/anushka-itape-99904b275/" target="_blank" rel="noreferrer" className="btn yellow">LINKEDIN</a> */}
           <a href="https://drive.google.com/file/d/1egbN2E-XCxssQFEs5fL5axd2ZXOISc_G/view?usp=drivesdk" target='' download className="resume-btn">Visit CV</a>

          <a href="https://github.com/Anushka1522" target="_blank" rel="noreferrer" className="btn dark">GITHUB</a>
        </div>
      </div>
      
    </div>
  );
}
