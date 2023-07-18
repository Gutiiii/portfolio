import { RefObject, useEffect, useMemo, useRef, useState } from "react";

const useCurrentSection = () => {
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
  return currentSection;
};
export default useCurrentSection;
