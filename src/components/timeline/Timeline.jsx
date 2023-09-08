import React from "react";
import "./timeline.css";
import { experiences } from "../../data/Experiences";
import Experience from "./Experience";

const Timeline = () => {
  return (
    <div className="timeline_container">
      <h2 className="section_title">My Journey</h2>
      <div>
        {experiences.map((exp) => (
          <Experience exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
