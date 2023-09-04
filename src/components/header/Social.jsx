import React from "react";
import "./header.css";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.linkedin.com/in/liem-truong-lt/"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/lt101"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
