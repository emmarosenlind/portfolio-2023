import React from "react";
import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="portfolio__volunteer" role="main">
      <h1 id="title">Other work</h1>

      <div className="project">
        <div className="project_info">
          <h2>Board member and web manager at</h2>
          <h3>2023</h3>
        </div>
        <h1 className="project_title">DATATJEJ</h1>
      </div>

      <div className="project">
        <div className="project_info">
          <h2>National Winner of</h2>
          <h3>2022</h3>
        </div>
        <h1 className="project_title">NASA SPACE APPS CHALLENGE</h1>
      </div>

      <div className="project">
        <div className="project_info">
          <h2>Best student team of</h2>
          <h3>2022</h3>
        </div>
        <h1 className="project_title">GOOD TECH HACK</h1>
      </div>

      <div className="project">
        <div className="project_info">
          <h2>PR manager at</h2>
          <h3>2021</h3>
        </div>
        <h1 className="project_title">PEPP</h1>
      </div>
    </div>
  );
};

export default Volunteer;
