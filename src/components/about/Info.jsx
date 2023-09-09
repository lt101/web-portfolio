import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">helloDarwin</h3>
        <span className="about_subtitle">Fullstack developer intern</span>
        <p className="about_date">Summer 2022</p>
      </div>
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Optimum Financial Group</h3>
        <span className="about_subtitle">Fullstack developer intern</span>
        <p className="about_date">Summer 2021</p>
      </div>
    </div>
  );
};

export default Info;
