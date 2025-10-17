"use client";

import React from "react";
import Image from "next/image";

export default function ProfessionalExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Ministry of Digital Affairs",
      companyLink: "https://moda.gov.tw/en/",
      period: "Mar. 2024 – Jul. 2024",
      icon: "/icons/professional/moda.svg",
      projects: [
        {
          name: "Automated Article Context Generation",
          bullets: [
            "Led a 5-member team to build an end-to-end LLM service in Python, Flask, OpenAI, and Gemini.",
            "Reduced article generation time by 15% for content across 200 websites.",
          ],
          tech: [
            { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
            { icon: "/icons/backend/flask.svg", label: "Flask" },
          ],
        },
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Taiwan Mobile",
      companyLink: "https://english.taiwanmobile.com/index.html",
      period: "Jun. 2023 – Jan. 2024",
      icon: "/icons/professional/taiwanmobile.svg",
      projects: [
        {
          name: "AI Text-based Customer System",
          bullets: [
            "Built a scalable LLM-powered backend API in Python, Flask, and Azure OpenAI.",
            "Designed a dynamic multi-assistant orchestration with session control using Redis.",
          ],
          tech: [
            { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
            { icon: "/icons/backend/flask.svg", label: "Flask" },
            { icon: "/icons/cloud/azure.svg", label: "Azure OpenAI" },
            { icon: "/icons/database/redis.svg", label: "Redis" },
          ],
        },
        {
          name: "myfone E-commerce Platform",
          bullets: [
            "Built an SSL/TLS certificate monitoring service in Java, Spring Boot, and Elasticsearch.",
            "Reduced daily inspection time by 84% by integrating with the company's proprietary M+ messenger system.",
          ],
          tech: [
            { icon: "/icons/programmingLanguage/java.svg", label: "Java" },
            { icon: "/icons/backend/springboot.svg", label: "Spring Boot" },
            { icon: "/icons/database/elasticsearch.svg", label: "Elasticsearch" },
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
                {/* 🏢 公司 Logo */}
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

                <div>
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
              </div>
              <span className="text-sm text-[#94A3B8]">{exp.period}</span>
            </div>

            {/* Projects */}
            <div className="mt-4 space-y-6">
              {exp.projects.map((proj, j) => (
                <div key={j} className="space-y-2">
                  <p className="text-[#E2E8F0] font-medium text-sm">
                    {proj.name}
                  </p>
                  <ul className="list-disc list-inside text-[#CBD5E1] text-sm space-y-1">
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

                  {/* 💡 Tech Stack 卡片 */}
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

/**
 * 粗體 + 語法高亮
 */
function highlightText(text: string) {
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-semibold text-[#F8FAFC]">$1</span>'
    )
    .replace(
      /(Led a 5-member team|end-to-end LLM service|Reduced article generation time by 15%|across 200 websites|scalable LLM-powered backend API|dynamic multi-assistant orchestration|Reduced daily inspection time by 84%)/g,
      '<span class="text-[#06B6D4] font-medium">$1</span>'
    );
}
