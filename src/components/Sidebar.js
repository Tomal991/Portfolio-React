import React from "react";
import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import github from "../icons/github.svg";
import tie from "../icons/tie.svg";
import pin from "../icons/pin.svg";
import profile from "../icons/profile.jpg";
import resume from "../icons/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmail = () => {
    window.open("mailto:intesarulhaquey4@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={profile} alt="" className="sidebar-image" />
      <div className="sidebar-name">
        Intesarul Haque <span>Tomal</span>
      </div>
      <div className="sidebar-title">Web developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar-item sidebar-resume">
          <img src={tie} alt="resume" className="sidebar-icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar-social-icons my-2">
        <a href="www.facebook.com">
          {" "}
          <img src={facebook} alt="facebook" className="sidebar-icon mr-3" />
        </a>
        <a href="www.instagram.com">
          {" "}
          <img src={instagram} alt="instagram" className="sidebar-icon" />
        </a>
      </figure>

      <div className="sidebar-contact">
        <div className="sidebar-item sidebar-github">
          <a href="">
            <img src={github} alt="github" className="sidebar-icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar-location">
          <img src={pin} alt="location" className="sidebar-icon mr-3" />
          Savar,Dhaka
        </div>
        <div className="sidebar-item">intesarulhaquey4@gmail.com</div>
        <div className="sidebar-item">01834266766</div>
      </div>

      <div className="sidebar-email" onClick={handleEmail}>
        Email Me
      </div>
    </motion.div>
  );
};
export default Sidebar;
