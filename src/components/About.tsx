"use client";
import { motion } from "framer-motion";
import React, { Fragment, useState, useEffect } from "react";

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (birthdate: any) => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };

    const myBirthdate = "2002-09-30"; // Replace with your actual birthdate
    setAge(calculateAge(myBirthdate));
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <Fragment>
      <div className="md:mr-20 md:px-10 pt-40 mx-10">
        <motion.h2
          initial={{ x: 1700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-4 text-white sm:text-3xl text-2xl font-bold "
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <p className="sm:text-2xl text-md">
            Hello, I&apos;m Samuel Gutmans, a {age}-year-old software engineer
            living in Basel, Switzerland. I can converse fluently in German,
            English and Danish. Holding degrees in Computer Science and Business
            Administration, I&apos;ve used my knowledge and skills as a Software
            Agency Owner and freelance software engineer in my spare time for
            several Years. During this time, I&apos;ve built various projects
            for clients scattered around the globe.
          </p>
          <br></br>
          <p className="sm:text-2xl text-md">
            When it comes to projects, I&apos;ve made use of a diverse set of
            technologies such as ReactJS (NextJS), NodeJS, TypeScript, Python,
            PHP, and many more. My Coding journey has led me to work on a
            variety of tasks including web projects, integrations, bots, and an
            array of different automations.
          </p>
          <br></br>
          <p className="sm:text-2xl text-md">
            If I were to pinpoint my greatest strength, it would be my
            problem-solving mindset. I have a genuine fascination with diving
            headfirst into complex problems and finding the most efficient
            solutions. This challenge is something I thoroughly enjoy and
            embrace in my work.
          </p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default About;
