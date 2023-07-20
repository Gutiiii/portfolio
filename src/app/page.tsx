"use client";
import About from "@/components/About";
import Background from "@/components/Background";
import Education from "@/components/Education";
import Icons from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const aboutRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const educationRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id); // target is the observed element
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // adjust this to your needs
      }
    );

    const sections = [
      aboutRef,
      skillsRef,
      educationRef,
      projectsRef,
      contactRef,
    ];

    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [aboutRef, skillsRef, educationRef, projectsRef, contactRef]);

  const handleOnClick = (section: string) => {
    if (section === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "education") {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Samuel Gutmans, Portfolio, Software Engineer, Frontend Engineer, Backend Engineer, Fullstack Engineer"
        />
        <link rel="canonical" href="https://samuel-gutmans.ch" />
      </Head>
      <Background>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 min-w-full h-full text-white font-sans">
          <div>
            <div className="lg:fixed">
              <Welcome />
              <Navbar
                currentSection={currentSection}
                handleOnClick={handleOnClick}
              />
            </div>
          </div>
          <div className="text-gray-400 font-thin tracking-wide">
            <div ref={aboutRef} id="about">
              <About />
            </div>
            <div ref={skillsRef} id="skills" className="mt-[400px]">
              <Skills />
            </div>
            <div ref={educationRef} id="education" className="mt-[400px]">
              <Education />
            </div>
          </div>
        </div>
        <div>
          <Icons />
        </div>
      </Background>
    </>
  );
}
