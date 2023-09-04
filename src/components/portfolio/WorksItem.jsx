import React from "react";

const WorksItem = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <div>
        <h3 className="work_title">{item.title}</h3>
        <div className="work_description">{item.description}</div>
        <div className="work_tags">{item.tags}</div>

        <a href={item.link} target="_blank" className="work_button">
          View code <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItem;
