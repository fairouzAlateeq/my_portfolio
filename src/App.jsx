// src/App.jsx
import './style.css';
import { Link } from 'react-router-dom';
import profilePic from './assets/pp.webp'; 
import bgImg from './assets/background.png';
function App() {
  return (
    <div className="container">
   <header className="header">
  <div className="header-inner">
    <nav className="nav-tabs">
      <a href="#home">Home</a>
      <Link to="/projects">Projects</Link>
      <a href="#about">About Me</a>
      <a href="#contact">Contact Me</a>
    </nav>
    <a href="/resume.pdf" download className="resume-btn">
      Download Resume
    </a>
  </div>
</header>

      <section className="about-section">
        <img src={profilePic} alt="Profile" className="avatar" />
        <div className="about-text">
          <h2>Fairouz Alateeq</h2>
        </div>
      </section>

      <section className="skills-section">
        <img src={bgImg} alt="Retro Background" className="bg-img" />
        <div className="skills-text">
          <p> 
            Hi! you can call me Fai!
            I am a security engineer working with AWS & Terraform. 
            Along side my expertise in Java and Database Development, I am growing a passion for UI design with React.👩‍💻
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
