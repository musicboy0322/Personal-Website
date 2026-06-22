"use client";
import React from "react";

interface Tag {
  icon: string | React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  tags: Tag[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#1E293B] border border-[#334155] rounded-2xl p-6 
                 transition-all duration-300 
                 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] 
                 hover:border-[#06B6D4] hover:bg-[#1E293B]/90"
    >
      {/* --- Title --- */}
      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>

      {/* --- Description --- */}
      <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* --- Tags --- */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1.5 px-2.5 py-1 
                       rounded-md bg-[#0F172A]/60 border border-[#334155] 
                       text-[13px] text-[#E2E8F0] transition-colors"
          >
            {typeof tag.icon === "string" ? (
              <img
                src={tag.icon}
                alt={tag.label}
                className="w-[13px] h-[13px] object-contain"
              />
            ) : (
              <div className="text-[13px] align-middle">{tag.icon}</div>
            )}
            <span className="text-[13px]">{tag.label}</span>
          </span>
        ))}
      </div>
    </a>
  );
}