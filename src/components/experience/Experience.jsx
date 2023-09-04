import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Experience</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="experience_container container">
        <div className="experience_sections">
          <div className="experience_content">
            <div className="experience_data">
              <div>
                <h3 className="experience_title">Software Engineering</h3>
                <span className="experience_subtitle">
                  Polytechnique Montreal
                </span>
                <div className="experience_calendar">January 2020</div>
              </div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
            </div>
            <div className="experience_data">
              <div></div>

              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div>
                <h3 className="experience_title">Fullstack developer intern</h3>
                <span className="experience_subtitle">
                  Optimum Financial Group
                </span>
                <div className="experience_calendar">
                  January 2020 - May 2023
                </div>
              </div>
            </div>
          </div>
          <div className="experience_content">
            <div className="experience_data">
              <div>
                <h3 className="experience_title">Software Engineering</h3>
                <span className="experience_subtitle">
                  Polytechnique Montreal
                </span>
                <div className="experience_calendar">
                  January 2020 - May 2023
                </div>
              </div>
              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
            </div>
            <div className="experience_data">
              <div></div>

              <div>
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
              </div>
              <div>
                <h3 className="experience_title">Something</h3>
                <span className="experience_subtitle">
                  Polytechnique Montreal
                </span>
                <div className="experience_calendar">
                  January 2020 - May 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
