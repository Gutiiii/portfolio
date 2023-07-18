"use client";
import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import useWindowHeight from "../hooks/useWindowHeight";

const Icons = () => {
  const windowHeight: number | undefined = useWindowHeight();

  const classIfHigh: string =
    "flex lg:fixed 2xl:bottom-32 lg:bottom-16 ml-20 absolute max-lg:md:top-[350px] max-lg:md:-left-1 max-md:sm:top-[230px] max-md:sm:-left-11 max-sm:top-[200px] max-sm:-left-11 ";
  const classIfLow: string =
    "flex lg:fixed absolute top-[700px] ml-20 max-lg:md:-left-1 max-md:sm:-left-11 max-sm:-left-11 max-lg:md:top-[350px] max-md:sm:top-[230px] max-sm:top-[200px]";

  if (!windowHeight) return;
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={windowHeight > 855 ? classIfHigh : classIfLow}
    >
      <a
        href="www.linkedin.com/in/samuelgutmans

        "
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin
          size="1.8rem"
          color="#94A3B8"
          className="mr-5 hover:cursor-pointer hover:opacity-80"
        />
      </a>
      <a href="https://github.com/Gutiiii" target="_blank" rel="noreferrer">
        <AiFillGithub
          size="1.7rem"
          color="#94A3B8"
          className="hover:cursor-pointer mr-5 hover:opacity-80"
          href=""
        />
      </a>
      <AiOutlineCloudDownload
        size="1.9rem"
        color="#94A3B8"
        className="mr-5 hover:cursor-pointer hover:opacity-80"
        data-tooltip-id="download"
        data-tooltip-content="Download CV!"
      />
      <Tooltip id="download" />
    </motion.div>
  );
};

export default Icons;

{
  /* import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { Tooltip } from "react-tooltip";
// import useWindowHeight from "../hooks/useWindowHeight";

const Icons = () => {
  // const windowHeight = useWindowHeight();

  // classIfHigher =
  //   "flex lg:fixed 2xl:bottom-32 lg:bottom-16 ml-20 absolute max-lg:md:top-[350px] max-lg:md:-left-1 max-md:sm:top-[230px] max-md:sm:-left-11 max-sm:top-[200px] max-sm:-left-11 ";
  // classIfLower =
  //   "flex lg:fixed 2xl:bottom-32 lg:bottom-16 ml-20 absolute max-lg:md:top-[350px] max-lg:md:-left-1 max-md:sm:top-[230px] max-md:sm:-left-11 max-sm:top-[200px] max-sm:-left-11 ";

  console.log(windowHeight);
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      // className={windowHeight > 790 ? classIfHigher : classIfLower}
    >
      <a
        href="https://www.linkedin.com/in/samuel-gutmans-88b92323b/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin
          size="1.8rem"
          color="#94A3B8"
          className="mr-5 hover:cursor-pointer hover:opacity-80"
        />
      </a>
      <a href="https://github.com/Gutiiii" target="_blank" rel="noreferrer">
        <AiFillGithub
          size="1.7rem"
          color="#94A3B8"
          className="hover:cursor-pointer mr-5 hover:opacity-80"
          href=""
        />
      </a>
      <AiOutlineCloudDownload
        size="1.9rem"
        color="#94A3B8"
        className="mr-5 hover:cursor-pointer hover:opacity-80"
        data-tooltip-id="download"
        data-tooltip-content="Download CV!"
      />
      <Tooltip id="download" />
    </motion.div>
  );
};

export default Icons;
*/
}
