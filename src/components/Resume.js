import React from "react";
import react from "../icons/react.svg";
import python from "../icons/python.svg";
import Bar from "./Bar"
import { motion } from "framer-motion";

const languages = [
  {
    icon: python,
    name: "Python",
    level: "90",
  },
  {
    icon: react,
    name: "java",
    level: "80",
  },
  {
    icon: react,
    name: "javascript",
    level: "70",
  }
];

const tools = [
  {
    icon: react,
    name: "figma",
    level: "30",
  },
  {
    icon: react,
    name: "word",
    level: "90",
  },
  {
    icon: react,
    name: "pp",
    level: "80",
  }
];
const resume_variant = {
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

const Resume = () => {
  return (
    <motion.div className="container resume"
    variants={resume_variant}
      initial="hidden"
      animate="visible">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Education</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">C.S.E</h5>
            <p className="resume-card-name">
              Daffodil International University
            </p>
            <p className="resume-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Experience</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">Final Year</h5>
            <p className="resume-card-name">
              Daffodil International University
            </p>
            <p className="resume-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Language and Framework</h5>
          <div className="resume-language-body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>

        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Tools and Software</h5>
          <div className="resume-language-body">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
