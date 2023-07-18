import About from "@/components/About";
import Background from "@/components/Background";
import Icons from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import React from "react";

export default function Home() {
  return (
    <Background>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 min-w-full h-full text-white font-sans">
        <div>
          <div className="lg:fixed">
            <Welcome />
            <Navbar />
          </div>
        </div>
        <div className="text-gray-400 font-thin tracking-wide">
          <About />
          <Skills />
        </div>
      </div>
      <div>
        <Icons />
      </div>
    </Background>
  );
}
