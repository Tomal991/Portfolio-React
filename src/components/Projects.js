import React, { useState } from "react";
import data_projects from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const handleFilterCatagory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };
  const project_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="container projects"
      variants={project_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="projects_navbar">
        <div onClick={() => setProjects(data_projects)}>ALL</div>
        <div onClick={() => handleFilterCatagory("react.js")}>React</div>
        <div onClick={() => handleFilterCatagory("mongoDB")}>mongoDB</div>
        <div onClick={() => handleFilterCatagory("node.js")}>Node</div>
        <div onClick={() => handleFilterCatagory("vanilla")}>Vanilla</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
