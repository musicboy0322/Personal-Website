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
          bullets: [
            "Led a 5-member team to develop a Python/Flask Generative AI multi-agent system integrating multi-LLM providers, conducting code review for 10+ PRs and establishing version control best practices and SDLC processes",
            "Elevated unit test coverage from near-zero to 85% across 14 core modules, ensuring reliability for LLM integration pipelines by decoupling tightly coupled service logic into a modular, testable architecture",
            "Accelerated an end-to-end Multi-Agent pipeline by 15%, optimizing multi-modal data fetching (1.2 GB) within a dedicated agent via thread-safe resource management"
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
          bullets: [
            "Developed a scalable LLM-powered backend supporting 4+ assistants with centralized orchestration and secured Redis state management using SSL/TLS certificate authentication",
            "Optimized token cost-efficiency by 75% and response accuracy by 90% by decomposing a 2,400-token monolithic prompt into modular 600-token specialized agents validated by empirical A/B testing",
            "Designed JMeter stress testing scripts covering 5+ critical APIs for the myfone e-commerce platform, analyzing performance and tail latency (p95/p99) under 1,000 concurrent users",
            "Engineered an SSL/TLS certificate monitoring service in Java, Spring Boot, Elasticsearch, and Bitbucket, reducing engineers’ daily inspection time by 84%, with automated alerts integrated into M+ messaging platform"
          ],
          tech: [
            { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
            { icon: "/icons/backend/flask.svg", label: "Flask" },
            { icon: "/icons/programmingLanguage/java.svg", label: "Java" },
            { icon: "/icons/backend/springboot.svg", label: "Spring Boot" },
            { icon: "/icons/cloud/azure.svg", label: "Azure OpenAI" },
            { icon: "/icons/database/redis.svg", label: "Redis" },
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
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4">
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

function highlightText(text: string) {
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-semibold text-[#F8FAFC]">$1</span>'
    )
    .replace(
      /(5-member team|Generative AI multi-agent system|unit test coverage|near-zero to 85%|14 core modules|end-to-end Multi-Agent pipeline by 15%|\(1.2 GB\)|LLM-powered backend|4+ assistants|token cost-efficiency by 75%|response accuracy by 90%|covering 5\+ critical APIs|1,000 concurrent users|84%)/g,
      '<span class="text-[#06B6D4] font-medium">$1</span>'
    );
}
