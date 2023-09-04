import React from "react";
import { projectsData } from "./Data";
import WorksItem from "./WorksItem";

const Works = () => {
  return (
    <div className="container">
      {projectsData.map((item) => {
        return <WorksItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Works;
