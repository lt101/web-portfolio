import React from "react";
import "./portfolio.css";
import Works from "./Works";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">My work</h2>
      <Works />
    </section>
  );
};

export default Portfolio;
