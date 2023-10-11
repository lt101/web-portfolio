import React from "react";

const WorksItem = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <div>
        <h3 className="work_title">{item.title}</h3>
        <div className="work_description">{item.description}</div>
        <div className="work_tags">{item.tags}</div>
        <div className="work_links">
          {item.demo && (
            <a href={item.demo} target="_blank" className="work_button">
              <i className="uil uil-external-link-alt work_button-icon"></i> Try
              it out
            </a>
          )}
          <a href={item.code} target="_blank" className="work_button">
            <i className="uil uil-github work_button-icon"></i>View code
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksItem;
