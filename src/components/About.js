import React from "react";
import api from "../icons/api.svg";
import SkillCard from "./SkillCard";
import backend from "../icons/backend.svg";
import algo from "../icons/algo.svg";
import computer from "../icons/computer.svg";
import { motion } from "framer-motion";

const skills = [
  {
    icon: api,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: backend,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: algo,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: computer,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: backend,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
  {
    icon: api,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, omnis.",
  },
];
const about_variant = {
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
const About = () => {
  return (
    <motion.div className="about"
    variants={about_variant}
      initial="hidden"
      animate="visible">
      <h6 className="about_intro">
        Lorem, ipsum dolor sit amet consectetur adatur quidem possimus.
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What I Offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill}/>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
