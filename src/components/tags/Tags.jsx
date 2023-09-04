import React from "react";
import "./tags.css";

const Tags = ({ tagList }) => {
  return (
    <div className="tag_container">
      {tagList.map((tag) => {
        return <div className="tag">{tag}</div>;
      })}
    </div>
  );
};

export default Tags;
