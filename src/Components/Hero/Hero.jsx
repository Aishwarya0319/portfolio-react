import React from 'react'
import './Hero.css';
import profile_img from '../../assets/aishwarya.jpeg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className="profile" src={profile_img} alt="Aishwarya Aitagani" />
      <h1> I'm <span> Aishwarya Aitagani </span> Full Stack developer based in the USA</h1>
      <p> Java | Spring Boot| Microservices| React| AWS| Docker| Jenkins  </p>

      <div className="hero-action">
        {/* LinkedIn in a new tab */}
        <div className="hero-connect">
          <a
            className="anchor-link"
            href="https://www.linkedin.com/in/aishwarya-aitagani-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </div>

        {/* Resume keeps the original button styling (div),
            but opens the PDF in a new tab */}
        <div
          className="hero-resume"
          onClick={() =>
            window.open('/Aishwarya_Aitagani_Resume.pdf', '_blank', 'noopener,noreferrer')
          }
        >
          My resume
        </div>
      </div>
    </div>
  )
}

export default Hero