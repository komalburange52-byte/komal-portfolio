import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const roles = [
    "AI & Data Science Student",
    "Full Stack Developer",

    "AI Enthusiast",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
  const revealElements = document.querySelectorAll(".reveal");

  const handleScroll = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className="portfolio">
  
  
      <nav className="navbar">
        <div className="logo">
          <span>Komal</span> Burange
        </div>

        <div className="nav-links">
        <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
         </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="intro">HELLO, I'M</p>

            <h1>
              Komal <span>Burange</span>
            </h1>

            <h2 className="animated-role">
              {roles[roleIndex]}
            </h2>

            <p className="hero-description">
              I build intelligent, modern, and user-friendly digital
              experiences using Artificial Intelligence and Full Stack
              Development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <span>→</span>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
              <a
             href="/Komal-Burange-Resume.pdf"
              download="Komal-Burange-Resume.pdf"
               className="resume-button"
               >
              Download Resume ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="ai-card">
              <p className="card-title">AI.DEVELOPER</p>

              <div className="card-line"></div>

              <p>Building ideas</p>
              <p>Creating solutions</p>
              <p>Learning continuously</p>

              <div className="status">
                <span></span>
                Available for opportunities
              </div>
            </div>
          </div>
        </section>

   {/* ABOUT SECTION */}
<section id="about" className="about reveal">
  <div className="section-label">
    <span className="section-number">01</span>
    ABOUT ME
  </div>

  <div className="about-content">
    <div className="about-text">
      <h2>
        Building technology with
        <span> purpose.</span>
      </h2>

      <p>
        I'm Komal Burange, an AI & Data Science student and aspiring
        developer passionate about Artificial Intelligence, Data Science,
        Python, and modern web development.
      </p>

      <p>
        I build practical applications using Artificial Intelligence,
        Machine Learning, and Full Stack Development. My projects include
        AI-powered applications and MERN stack web applications, and I
        continuously improve my programming and problem-solving skills
        through hands-on development.
      </p>

      <a href="#projects" className="about-button">
        See My Projects <span>→</span>
      </a>
    </div>

    <div className="about-stats">
      <div className="stat-card">
        <span className="stat-number">AI</span>
        <p>Artificial Intelligence</p>
      </div>

      <div className="stat-card">
        <span className="stat-number">MERN</span>
        <p>Full Stack Development</p>
      </div>

      <div className="stat-card">
        <span className="stat-number">2027</span>
        <p>Graduation Goal</p>
      </div>

      <div className="stat-card">
        <span className="stat-number">∞</span>
        <p>Always Learning</p>
      </div>
    </div>
  </div>
</section>

        {/* SKILLS SECTION */}
       <section id="skills" className="skills reveal">
          <div className="section-label">
            <span className="section-number">02</span>
            MY SKILLS
          </div>

          <div className="skills-header">
            <h2>
              Technologies I use to
              <span> build ideas.</span>
            </h2>

            <p>
              A combination of programming, full stack development,
              databases, and Artificial Intelligence technologies.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon">🐍</span>
              <h3>Python</h3>
              <p>Programming & AI Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">⚛️</span>
              <h3>React</h3>
              <p>Modern Frontend Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🟢</span>
              <h3>Node.js</h3>
              <p>Backend Development</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🍃</span>
              <h3>MongoDB</h3>
              <p>Database Management</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🟨</span>
              <h3>JavaScript</h3>
              <p>Interactive Web Applications</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🤖</span>
              <h3>Machine Learning</h3>
              <p>Intelligent Data Solutions</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🗄️</span>
              <h3>SQL</h3>
              <p>Database Queries & Data Management</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">⚙️</span>
              <h3>Express.js</h3>
              <p>Backend APIs & Web Applications</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🧠</span>
              <h3>Deep Learning</h3>
              <p>Neural Networks & AI Models</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">👁️</span>
              <h3>Computer Vision</h3>
              <p>Image Analysis & AI Applications</p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects reveal">
          <div className="section-label">
            <span className="section-number">03</span>
            FEATURED PROJECTS
          </div>

          <div className="projects-header">
            <div>
              <h2>
                Things I've <span>built.</span>
              </h2>

              <p>
                A selection of projects where I apply my skills to build
                practical and meaningful applications.
              </p>
            </div>

            <span className="projects-count">02 PROJECTS</span>
          </div>

          <div className="projects-list">

            {/* PROJECT 1 */}
            <article className="project-card">
              <div className="project-number">01</div>

              <div className="project-content">
                <span className="project-category">
                  ARTIFICIAL INTELLIGENCE
                </span>

                <h3>MedVision-AI</h3>

                <p>
                  An AI-powered medical image analysis application designed
                  to analyze chest X-rays and provide predictions with
                  confidence scores.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>Machine Learning</span>
                  <span>React</span>
                </div>

                <div className="project-links">
                  <a href="#" target="_blank">
                    View Project ↗
                  </a>

                  <a href="#" target="_blank">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="project-visual medvision-visual">
                <div className="scan-circle">
                  <div className="scan-line"></div>
                  <span>AI</span>
                </div>

                <div className="data-line line-one"></div>
                <div className="data-line line-two"></div>
                <div className="data-line line-three"></div>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="project-card reverse">
              <div className="project-number">02</div>

              <div className="project-content">
                <span className="project-category">
                  FULL STACK DEVELOPMENT
                </span>

                <h3>MERN Movies App</h3>

                <p>
                  A full stack movie discovery application built using the
                  MERN stack, allowing users to explore and browse movies
                  through a modern web interface.
                </p>

                <div className="project-tech">
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>

                <div className="project-links">
                  <a href="#" target="_blank">
                    View Project ↗
                  </a>

                  <a href="#" target="_blank">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="project-visual movies-visual">
                <div className="movie-screen">
                  <span>PLAY</span>
                  <div className="play-button">▶</div>
                </div>

                <div className="movie-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
            {/* PROJECT 3 */}
            <article className="project-card">
              <div className="project-number">03</div>

              <div className="project-content">
                <span className="project-category">
                  PYTHON & AUTOMATION
                </span>

                <h3>Jarvis AI Voice Assistant</h3>

                <p>
                  A Python-based intelligent voice assistant that listens to voice
                  commands and responds using speech. Jarvis can search Wikipedia,
                  open websites, play music, tell the time, and automate email tasks.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>SpeechRecognition</span>
                  <span>pyttsx3</span>
                  <span>Wikipedia API</span>
                  <span>Automation</span>
                </div>

                <div className="project-links">
                  <a href="#" target="_blank">
                    View Project ↗
                  </a>

                  <a href="#" target="_blank">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="project-visual jarvis-visual">
                <div className="jarvis-core">
                  <div className="jarvis-ring ring-one"></div>
                  <div className="jarvis-ring ring-two"></div>
                  <div className="jarvis-ring ring-three"></div>

                  <span>J</span>
                </div>

                <div className="sound-wave">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact reveal">
          <div className="contact-glow"></div>

          <div className="section-label">
            <span className="section-number">04</span>
            GET IN TOUCH
          </div>

          <div className="contact-content">
            <div className="contact-text">
              <p className="contact-small-text">
                HAVE AN IDEA OR OPPORTUNITY?
              </p>

              <h2>
                Let's build something
                <span> amazing together.</span>
              </h2>

              <p className="contact-description">
                I'm always interested in learning about new opportunities,
                collaborating on interesting projects, and connecting with
                people in technology.
              </p>

              <a
                href="mailto:komalburange52@gmail.com"
                className="email-button"
              >
                Send Me an Email ↗
              </a>
            </div>

            <div className="contact-info">
              <div className="contact-card">
                <span className="contact-icon">✉</span>

                <div>
                  <p className="contact-label">EMAIL</p>
                  <a href="mailto:komalburange52@gmail.com">
                    komalburange52@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-icon">💻</span>

                <div>
                  <p className="contact-label">GITHUB</p>
                  <a
                    href="https://github.com/komalburange52-byte"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/komalburange52-byte
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-icon">in</span>

                <div>
                  <p className="contact-label">LINKEDIN</p>
                  <a
                    href="https://www.linkedin.com/in/komal-burange"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-logo">
            <span>Komal</span> Burange
          </div>

          <p>Designed & Built by Komal Burange</p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
 
 
}

export default App;