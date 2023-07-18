"use client";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import About from "./About";
// import Skills from "./Skills";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const aboutRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const educationRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const inactiveLineClass: string = "line w-8 h-px bg-gray-400 my-auto mr-4";
  const activeLineClass: string = "line h-px bg-white w-20 my-auto mr-4";

  const inactiveTextClass: string = "text-gray-400";
  const activeTextClass: string = "text-white";

  const hoverClass: string =
    "group-hover:bg-white group-hover:w-20 transition-width duration-500";

  const observer = useMemo(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return null;
    }
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      },
      { threshold: 0.4 }
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        },
        { threshold: 0.4 }
      );

      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }
      if (skillsRef.current) {
        observer.observe(skillsRef.current);
      }
      if (educationRef.current) {
        observer.observe(educationRef.current);
      }
      if (projectsRef.current) {
        observer.observe(projectsRef.current);
      }
      if (contactRef.current) {
        observer.observe(contactRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [aboutRef, skillsRef, educationRef, projectsRef, contactRef]);

  return (
    <div className="ml-20 lg:mt-20">
      <ol className="space-y-8 text-xl lg:list-item hidden">
        <motion.div
          ref={aboutRef}
          id="about"
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
          >
            ABOUT
          </li>
        </motion.div>
        <motion.div
          ref={skillsRef}
          id="skills"
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
          >
            SKILLS
          </li>
        </motion.div>
        <motion.div
          ref={educationRef}
          id="education"
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
          >
            EDUCATION
          </li>
        </motion.div>
        <motion.div
          ref={projectsRef}
          id="projects"
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
          >
            PROJECTS
          </li>
        </motion.div>
        <motion.div
          ref={contactRef}
          id="contact"
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
          >
            CONTACT
          </li>
        </motion.div>
      </ol>
    </div>
  );
};

export default Navbar;
