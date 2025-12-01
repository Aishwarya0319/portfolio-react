import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/aishwarya.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
    <div className="about-title">
        <h1> About Me </h1>
        <img src={theme_pattern} alt="" />
    </div>
    
    <div className="about-sections">
        <div className="about-left">
            <div className="about-photo-wrap">
              <img className="about-photo-rect" src={profile_img} alt="Aishwarya Aitagani" />
            </div>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Java Full-Stack Developer — Spring Boot microservices, REST APIs, React/Angular, JavaScript/TypeScript, AWS</p>
                <p>Modernized monoliths to cloud-ready services; CI/CD with Jenkins • Docker • Kubernetes; Kafka integrations; builds fast, accessible UIs. </p>
            </div>
            <div className="about-skills">
  <div className="about-skill"><p>Java & Spring Boot</p><hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Microservices • REST APIs</p><hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>React (Hooks) • Redux</p> <hr style={{width:"50%"}} /></div>
    <div className="about-skill"><p>Node.js • Express</p> <hr style={{width:"50%"}} /> </div>
  <div className="about-skill"><p>Angular</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>JavaScript / TypeScript</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>AWS: ECS, S3, RDS, CloudFront, Lambda</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Docker • Kubernetes</p> <hr style={{width:"50%"}} /></div>
    <div className="about-skill"><p>CI/CD: Jenkins • Maven</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Kafka</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>PostgreSQL • MongoDB</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Testing: JUnit • Mockito • Jest</p> <hr style={{width:"50%"}} /></div>
  <div className="about-skill"><p>Security: OAuth2 • JWT • Swagger</p> <hr style={{width:"50%"}} /></div>
</div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1> 4+    </h1>
            <p> YEARS OF EXPERIENCE </p>
        </div><div className="about-achievement">
            <h1> 12+   </h1>
            <p> PROJECTS DELIVERED </p>
        </div>
        <div className="about-achievement">
            <h1> 8+    </h1>
            <p> MICROSERVICES SHIPPED  </p>
        </div>

    </div>
    </section>
  );
};

export default About;