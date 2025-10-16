import SectionTitle from "../SectionTitle";
import TechStackCard from "../TechStackCard";
import SelectedProjects from "../SelectedProjects";
import { HiArrowRight } from "react-icons/hi";

interface AboutSectionProps {
  onSelect?: (section: string) => void;
}

export default function AboutSection({ onSelect }: AboutSectionProps) {
  return (
    <section className="space-y-6 animate-fadeIn">
      {/* --- About Me --- */}
      <SectionTitle>About Me</SectionTitle>

      <p className="text-[#E2E8F0] leading-relaxed">
        I'm a first-year Master of Engineering (M.Eng.) student in Electrical and Computer Engineering
        at the{" "}
        <a
          target="_blank"
          href="https://uwaterloo.ca/"
          className="text-[#06B6D4] font-medium hover:text-[#22D3EE] hover:underline transition-colors duration-200"
        >
          University of Waterloo
        </a>
        . I graduated with a Bachelor of Science (B.S.) in Medical Informatics and Innovative Application at the{" "}
        <a
          target="_blank"
          href="https://www.fju.edu.tw/indexEN.jsp"
          className="text-[#06B6D4] font-medium hover:text-[#22D3EE] hover:underline transition-colors duration-200"
        >
          Fu Jen Catholic University
        </a>
        .
      </p>

      {/* --- Selected Projects --- */}
      <div className="flex items-center justify-between mt-10">
        <SectionTitle className="!mt-0">Selected Projects</SectionTitle>

        {/* ✅ 改成直接切換到 projects 區塊 */}
        <button
          onClick={() => onSelect?.("projects")}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#1E293B] border border-[#334155] text-[#E2E8F0] 
                     text-sm font-medium transition-all duration-300 
                     hover:border-[#06B6D4] hover:text-[#22D3EE] hover:bg-[#1E293B]/90"
        >
          See More Projects
          <HiArrowRight className="text-[#E2E8F0]" />
        </button>
      </div>

      <SelectedProjects />

      {/* --- Tech Stacks --- */}
      <SectionTitle className="mt-10">Tech Stacks</SectionTitle>
      <TechStackCard />
    </section>
  );
}