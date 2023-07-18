"use client";
import { throttle } from "lodash";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [cursorPosition, setCursorPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const updateCursorPosition = throttle((ev: MouseEvent) => {
    if (
      window.matchMedia("(hover: hover) and (orientation: landscape)").matches
    ) {
      setCursorPosition({ x: ev.pageX, y: ev.pageY });
    }
  }, 20); // throttle rate: 20ms

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [updateCursorPosition]);

  return cursorPosition;
};

export default useMousePosition;
