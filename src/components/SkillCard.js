import React from "react";

const SkillCard = ({ skill: { icon, title, content } }) => (
  <div className="col-lg-6">
    <div className="skill-card">
      <img src={icon} alt="" className="skill-card-icon" />
      <div className="skill-card-body">
        <h6 className="skill-card-title">{title}</h6>
        <p className="skill-card-content">{content}</p>
      </div>
    </div>
  </div>
);

export default SkillCard;
