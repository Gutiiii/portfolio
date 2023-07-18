"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { FC, ReactNode, useEffect, useState } from "react";

interface BackgroundProps {
  children?: ReactNode; // Defines the types of children that the component can accept
}

interface Positions {}

const Background: FC<BackgroundProps> = ({ children }) => {
  const cursorPosition = useMousePosition();
  const [backgroundStyle, setBackgroundStyle] = useState({});
  useEffect(() => {
    setBackgroundStyle({
      background: `radial-gradient(circle 300px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20,29,58, 1) 25%, rgba(20,29,58, 1) 50%, #111625)`,
    });
  }, [cursorPosition]);

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
