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
  const hasLink = !!project.link;

  const cardStyle = `
    block bg-[#1E293B] border border-[#334155] rounded-2xl p-6 
    transition-all duration-300 group relative overflow-hidden
    ${hasLink ? "hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-[#06B6D4] hover:bg-[#1E293B]/90 cursor-pointer" : ""}
  `;

  const CardContent = () => (
    <>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg font-semibold text-white tracking-wide transition-colors group-hover:text-[#06B6D4]">
          {project.title}
        </h3>
        
        {hasLink && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full 
                          bg-[#0F172A]/50 border border-[#334155] text-[#CBD5E1]
                          transition-all duration-300 shrink-0 select-none
                          group-hover:border-[#06B6D4] group-hover:bg-[#06B6D4]/10 group-hover:text-[#06B6D4]">
            <span className="text-xs font-medium tracking-wider">Checkout</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-3.5 h-3.5 transition-all duration-300 origin-center
                         group-hover:rotate-45 group-hover:translate-x-0.5"
            >
              <path 
                fillRule="evenodd" 
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
      </div>

      <p className="text-[#CBD5E1]/90 text-sm leading-relaxed mb-4 font-normal">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1.5 px-2.5 py-1 
                       rounded-md bg-[#0F172A]/60 border border-[#334155] 
                       text-[13px] text-[#E2E8F0] transition-colors
                       group-hover:border-[#334155]/80"
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
    </>
  );

  if (hasLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardStyle}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={cardStyle}>
      <CardContent />
    </div>
  );
}