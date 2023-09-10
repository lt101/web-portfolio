import React from "react";
import "./portfolio.css";
import Works from "./Works";

const Portfolio = () => {
  return (
    <section className="portfolio section container" id="portfolio">
      <div className="work_header">
        Feel free to explore some of{" "}
        <span className="section_title">My Work</span>
      </div>
      <Works />
    </section>
  );
};

export default Portfolio;
