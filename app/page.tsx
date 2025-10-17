"use client";

import React, { useState } from "react";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectSection from "../components/sections/ProjectSection";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div
      className="bg-[#1E293B] border border-[#334155] 
                 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.25)] 
                 p-10 backdrop-blur-md text-[#F8FAFC] transition-all duration-500 mt-7"
    >
      {/* ✅ Navbar 控制目前顯示哪一區 */}
      <Navbar active={activeSection} onSelect={setActiveSection} />

      {/* ✅ 各區切換 */}
      <div className="mt-10 transition-opacity duration-700 ease-in-out">
        {activeSection === "about" && <AboutSection onSelect={setActiveSection} />}
        {activeSection === "experiences" && <ExperienceSection />}
        {activeSection === "projects" && <ProjectSection />}
      </div>
    </div>
  );
}
