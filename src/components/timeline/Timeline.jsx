import React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeline_container">
      <h2 className="section_title">My Journey</h2>
      <div className="timeline_item">
        <div>
          <h3>Started Software Engineering Degree</h3>
          <p>Polytechnique Montréal - January 2020</p>
        </div>
      </div>
      <div className="timeline_item">
        <div>
          <h3>Technical writer</h3>
          <p>Garantie Avantage Plus - Fall 2020</p>
        </div>
      </div>
      <div className="timeline_item">
        <div>
          <h3>Fullstack developer intern</h3>
          <p>Optimum Financial Group - Summer 2021</p>
        </div>
      </div>
      <div className="timeline_item">
        <div>
          <h3>Fullstack developer intern</h3>
          <p>helloDarwin - Summer 2022</p>
        </div>
      </div>
      <div className="timeline_item">
        <div>
          <h3>Graduated from Software Engineering</h3>
          <p>B. Eng degree obtained - June 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
