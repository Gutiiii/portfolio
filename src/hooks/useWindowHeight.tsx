"use client";
import { useEffect, useState } from "react";

export default function useWindowHeight() {
  // Initialise the state with undefined during server-side rendering
  const [windowHeight, setWindowHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    // Update the state with the actual value in the useEffect hook which will
    // run on client side after the first render
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowHeight;
}
