import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [title, setTitle] = useState("About");

  useEffect(() => {
    let currentUrl = window.location.href;
    console.log(currentUrl);
    if (currentUrl.endsWith("/")) setTitle("About");
    else if (currentUrl.endsWith("/Resume")) setTitle("Resume");
    else if (currentUrl.endsWith("/Projects")) setTitle("Projects");
  }, [title]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-title">{title}</div>

      <div className="navbar-items">
        {title !== "About" && (
          <Link to="/">
            <div className="navbar-item" onClick={() => setTitle("About")}>
              About
            </div>
          </Link>
        )}
        {title !== "Resume" ? (
          <Link to="/Resume">
            <div className="navbar-item" onClick={() => setTitle("Resume")}>
              Resume
            </div>
          </Link>
        ) : null}

        {title !== "Projects" && (
          <Link to="/Projects">
            <div className="navbar-item" onClick={() => setTitle("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
