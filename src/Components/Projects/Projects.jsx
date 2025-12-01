import React from "react";
import "./Projects.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import { Projects_Data } from "../../assets/projects_data.js";

const Projects = () => {
  return (
    <section id="projects" className="projects">
     <div className="projects-title">
        <h1>Projects</h1>
          <img className="title-blob" src={theme_pattern} alt="" />
    </div>
      <div className="projects-grid">
        {Projects_Data.map((p,i)=>(
          <article className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="stack">{p.stack}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;