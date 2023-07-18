"use client";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import About from "./About";

interface NavbarProps {
  currentSection: string | null;
  handleOnClick: (section: string) => void;
}

const Navbar: FC<NavbarProps> = ({
  currentSection = "about",
  handleOnClick,
}) => {
  const inactiveLineClass: string = "line w-8 h-px bg-gray-400 my-auto mr-4";
  const activeLineClass: string = "line h-px bg-white w-20 my-auto mr-4";

  const inactiveTextClass: string = "text-gray-400";
  const activeTextClass: string = "text-white";

  const hoverClass: string =
    "group-hover:bg-white group-hover:w-20 transition-width duration-500";

  const handleClickAbout = () => {
    handleOnClick("about");
  };
  const handleClickSkills = () => {
    handleOnClick("skills");
  };
  const handleClickEducation = () => {
    handleOnClick("education");
  };
  const handleCLickProjects = () => {
    handleOnClick("projects");
  };
  const handleClickContact = () => {
    handleOnClick("contact");
  };

  return (
    <div className="ml-20 lg:mt-20">
      <ol className="space-y-8 text-xl lg:list-item hidden">
        <motion.div
          className={`group cursor-pointer flex`}
          initial={{ x: -750 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className={`${
              currentSection === "about" ? activeLineClass : inactiveLineClass
            } ${hoverClass}`}
          ></div>
          <li
            className={`${
              currentSection === "about" ? activeTextClass : inactiveTextClass
            } group-hover:text-white`}
            onClick={handleClickAbout}
          >
            ABOUT
          </li>
        </motion.div>
        <motion.div
          className={`group cursor-pointer flex`}
          initial={{ x: -750 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className={`${
              currentSection === "skills" ? activeLineClass : inactiveLineClass
            } ${hoverClass}`}
          ></div>
          <li
            className={`${
              currentSection === "skills" ? activeTextClass : inactiveTextClass
            } group-hover:text-white`}
            onClick={handleClickSkills}
          >
            SKILLS
          </li>
        </motion.div>
        <motion.div
          className={`group cursor-pointer flex`}
          initial={{ x: -750 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className={`${
              currentSection === "education"
                ? activeLineClass
                : inactiveLineClass
            } ${hoverClass}`}
          ></div>
          <li
            className={`${
              currentSection === "education"
                ? activeTextClass
                : inactiveTextClass
            } group-hover:text-white`}
            onClick={handleClickEducation}
          >
            EDUCATION
          </li>
        </motion.div>
        <motion.div
          className={`group cursor-pointer flex`}
          initial={{ x: -750 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div
            className={`${
              currentSection === "projects"
                ? activeLineClass
                : inactiveLineClass
            } ${hoverClass}`}
          ></div>
          <li
            className={`${
              currentSection === "projects"
                ? activeTextClass
                : inactiveTextClass
            } group-hover:text-white`}
            onClick={handleCLickProjects}
          >
            PROJECTS
          </li>
        </motion.div>
        <motion.div
          className={`group cursor-pointer flex`}
          initial={{ x: -750 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className={`${
              currentSection === "contact" ? activeLineClass : inactiveLineClass
            } ${hoverClass}`}
          ></div>
          <li
            className={`${
              currentSection === "contact" ? activeTextClass : inactiveTextClass
            } group-hover:text-white`}
            onClick={handleClickContact}
          >
            CONTACT
          </li>
        </motion.div>
      </ol>
    </div>
  );
};

export default Navbar;
