"use client";
import { Progress } from "@/components/ui/Progress";
import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <div className="md:mr-20 md:px-10 mt-[1000px] mx-10 text-left">
      <motion.h1
        initial={{ x: 1700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-4 text-white text-lg font-bold uppercase"
      >
        Skills
      </motion.h1>
      <motion.div
        initial={{ x: 1700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid 2xl:grid-cols-2 grid-cols-1 text-left"
      >
        <div className="pb-8 2xl:pr-4">
          <span className="text-lg ">Technical</span>
          <div className="mt-4 text-white ">
            <span>NodeJS & ReactJS</span>
            <Progress value={90} />
          </div>
          <div className="mt-4 text-white ">
            <span>JavaScript & TypeScript</span>
            <Progress value={90} />
          </div>
          <div className="mt-4 text-white ">
            <span>PHP</span>
            <Progress value={80} />
          </div>
          <div className="mt-4 text-white ">
            <span>Java</span>
            <Progress value={80} />
          </div>
          <div className="mt-4 text-white ">
            <span>Python</span>
            <Progress value={90} />
          </div>
          <div className="mt-4 text-white ">
            <span>TailwindCSS</span>
            <Progress value={90} />
          </div>
        </div>
        <div className="2xl:pl-4 ">
          <span className="text-lg ">Personal</span>
          <div className="mt-4 text-white ">
            <span>Logical thinking</span>
            <Progress value={95} />
          </div>
          <div className="mt-4 text-white ">
            <span>Analytical Skills</span>
            <Progress value={95} />
          </div>
          <div className="mt-4 text-white ">
            <span>Fast Comprehension</span>
            <Progress value={90} />
          </div>
          <div className="mt-4 text-white ">
            <span>Goal Oriented</span>
            <Progress value={90} />
          </div>
          <div className="mt-4 text-white ">
            <span>Eager to Learn</span>
            <Progress value={100} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pb-4 pt-8 text-white text-lg font-bold uppercase">
          More Knowledge
        </div>
        <li className="pl-4">HTML & CSS</li>
        <li className="pl-4">SQL</li>
        <li className="pl-4">MongoDB</li>
        <li className="pl-4">GIT</li>
      </motion.div>
    </div>
  );
};

export default Skills;
