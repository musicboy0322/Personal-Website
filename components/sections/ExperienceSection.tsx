import SectionTitle from "../SectionTitle";

export default function ExperienceSection() {
    return (
      <section className="space-y-6 animate-fadeIn">
        <SectionTitle>Education</SectionTitle>
  
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#F8FAFC]">
              Software Engineer Intern @ Taiwan Mobile
            </h3>
            <p className="text-[#94A3B8] text-sm">Jul 2023 – Sep 2023</p>
            <p className="text-[#E2E8F0]">
              Developed an automated testing system using Python and Selenium,
              reducing manual UI regression testing time by 60%.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-[#F8FAFC]">
              Software Engineer Intern @ Ministry of Digital Affairs
            </h3>
            <p className="text-[#94A3B8] text-sm">Feb 2024 – Apr 2024</p>
            <p className="text-[#E2E8F0]">
              Built backend services with Java Spring Boot and Elasticsearch
              to optimize data processing and search efficiency.
            </p>
          </div>
        </div>
      </section>
    );
  }
  