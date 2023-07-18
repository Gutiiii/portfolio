"use client";
import { Progress } from "@/components/ui/Progress";
import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <div className="md:mr-20 md:px-10 mt-40 mx-10 text-left">
      <motion.h1
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-8 text-white text-lg font-bold uppercase"
      >
        Skills
      </motion.h1>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-12"
      >
        <div className="w-1/2">
          <div className="mt-4 text-white ">
            <span>NodeJS & ReactJS</span>
            <Progress value={90} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>JavaScript & TypeScript</span>
            <Progress value={90} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>PHP</span>
            <Progress value={80} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>Java</span>
            <Progress value={80} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>TailwindCSS</span>
            <Progress value={90} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>SQL</span>
            <Progress value={80} color="" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mt-4 text-white ">
            <span>Logical thinking</span>
            <Progress value={95} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>Analytical Skills</span>
            <Progress value={95} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>Fast Comprehension</span>
            <Progress value={90} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>Goal Oriented</span>
            <Progress value={90} color="" />
          </div>
          <div className="mt-4 text-white ">
            <span>Eager to Learn</span>
            <Progress value={100} color="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
