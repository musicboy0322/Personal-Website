"use client";

import React from "react";
import Image from "next/image";

export default function ProfessionalExperienceSection() {
  const experiences = [
    {
      title: "Open Source Contributor",
      company: "LF Decentralized Trust",
      companyLink: "https://www.lfdecentralizedtrust.org",
      period: "May. 2025 – Jun. 2025",
      icon: "/icons/professional/lfdt.svg",
      projects: [
        {
          name: "Hyperledger Cacti",
          projectLink: "https://github.com/hyperledger-cacti/cacti",
          bullets: [
            "Delivered a full-stack ERC-721 metadata feature by extending the Ethereum persistence pipeline to synchronize 3 NFT metadata fields across PostgreSQL, TypeScript services, React UI, and integration testing",
            "Resolved ARM64 Docker build compatibility issues by tracing dependency incompatibilities across the LFDT Cacti and Fabric codebases, restoring a reliable cross-platform development environment",
            "Improved developer onboarding by designing 2 VSCode Dev Container setup workflows (beginner and advanced), standardizing the containerized development environment",
          ],
          tech: [
            { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
            { icon: "/icons/frontend/react.svg", label: "React" },
            { icon: "/icons/backend/nodejs.svg", label: "Node.js" },
            { icon: "/icons/database/supabase.svg", label: "Supabase" },
            { icon: "/icons/devops/docker.svg", label: "Docker" },
          ],
        },
      ],
    },
  ];

  return (
    <section className="space-y-6 animate-fadeIn">
      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[#1E293B] border border-[#334155] rounded-lg p-7 
                       shadow-[0_0_25px_rgba(6,182,212,0.15)] 
                       hover:border-[#06B6D4] hover:shadow-[0_8px_30px_rgba(6,182,212,0.35)] 
                       hover:-translate-y-2 transform transition-all duration-300 ease-out"
          >
            {/* Header row */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4">
                {/* Company logo */}
                {exp.icon && (
                  <div className="w-[44px] h-[44px] relative flex-shrink-0 bg-white rounded-md overflow-hidden">
                    <Image
                      src={exp.icon}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}

                <h3 className="text-lg text-white font-semibold text-base">
                  {exp.title},{" "}
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#06B6D4] hover:text-[#22D3EE] hover:underline"
                  >
                    {exp.company}
                  </a>
                </h3>
              </div>

              <span className="text-sm text-[#94A3B8]">{exp.period}</span>
            </div>

            {/* Projects */}
            <div className="mt-4 space-y-6">
              {exp.projects.map((proj, j) => (
                <div key={j} className="space-y-3">
                {/* Project name with optional link */}
                {proj.projectLink ? (
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#06B6D4] hover:text-[#22D3EE] font-medium text-sm underline-offset-2 hover:underline"
                  >
                    {proj.name}
                  </a>
                ) : (
                  <p className="text-[#E2E8F0] font-medium text-sm">
                    {proj.name}
                  </p>
                )}
              
                {/* Bullets */}
                <ul className="list-disc list-inside text-[#CBD5E1] text-sm space-y-1 mt-1.5">
                  {proj.bullets.map((b, k) => (
                    <li key={k}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightText(b),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              
                {/* Tech Stack */}
                {proj.tech && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 
                                   rounded-md bg-[#0F172A]/60 border border-[#334155] 
                                   text-[13px] text-[#E2E8F0] transition-colors"
                      >
                        <img
                          src={t.icon}
                          alt={t.label}
                          className="w-[14px] h-[14px] object-contain"
                        />
                        <span>{t.label}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>              
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function highlightText(text: string) {
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-semibold text-[#F8FAFC]">$1</span>'
    )
    .replace(
      /\b(full-stack ERC-721 metadata feature | 3 NFT metadata fields | integration testing | ARM64 Docker build compatibility issues | LFDT Cacti and Fabric codebases | developer onboarding | 2 VSCode Dev Container setup workflows)\b/g,
      '<span class="text-[#06B6D4] font-medium">$1</span>'
    );
}
