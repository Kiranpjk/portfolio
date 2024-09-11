import React from 'react'
import "./skill.css";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
        Skills
      </h2>
        <span className="section__subtitle">My techincal level</span>

      <div className="skills__container contianer grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills