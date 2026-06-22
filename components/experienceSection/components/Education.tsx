"use client";

import React from "react";
import Image from "next/image";

export default function EducationSection() {
  const educations = [
    {
      school: "University of Waterloo",
      degree: "Master of Engineering in Electrical and Computer Engineering",
      period: "Sep. 2025 – Dec. 2026 (Expected)",
      link: "https://uwaterloo.ca/",
      icon: "/icons/education/waterloo.svg",
    },
    {
      school: "Fu Jen Catholic University",
      degree: "Bachelor of Science in Medical Informatics and Innovative Application",
      period: "Sep. 2020 – Jun. 2024",
      link: "https://www.fju.edu.tw/indexEN.jsp",
      icon: "/icons/education/fju.svg",
    },
  ];

  return (
    <section className="space-y-8 animate-fadeIn">
      <div className="flex flex-col gap-6">
        {educations.map((edu, i) => (
          <div
            key={i}
            className="bg-[#1E293B] border border-[#334155] rounded-lg p-7 
                       shadow-[0_0_25px_rgba(6,182,212,0.15)] 
                       hover:border-[#06B6D4] hover:shadow-[0_8px_30px_rgba(6,182,212,0.35)] 
                       hover:-translate-y-1 transform
                       transition-all duration-300 ease-out"
          >
            {/* Header row: icon + school + period */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4">
                {edu.icon && (
                  <div className="w-[44px] h-[44px] relative flex-shrink-0 bg-white rounded-md overflow-hidden">
                    <Image
                      src={edu.icon}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}

                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-[#06B6D4] hover:text-[#22D3EE] hover:underline"
                >
                  {edu.school}
                </a>
              </div>
              <span className="text-sm text-[#94A3B8]">{edu.period}</span>
            </div>

            {/* Degree */}
            <p className="text-[#E2E8F0] text-[15px] mt-3 leading-relaxed">
              {edu.degree}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
