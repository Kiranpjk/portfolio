import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com" className="home__social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://www.google.com" className="home__social-icon" target="_blank">
        <i className="uil uil-dribbble"></i>
      </a>
      <a href="https://www.github.com/Kiranpjk" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
