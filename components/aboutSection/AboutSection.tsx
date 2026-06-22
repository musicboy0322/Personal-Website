import SectionTitle from "../shared/SectionTitle";
import TechStackCard from "./components/TechStackCard";
import SelectedProjects from "./components/SelectedProjects";
import { HiArrowRight } from "react-icons/hi";

interface AboutSectionProps {
  onSelect?: (section: string) => void;
}

export default function AboutSection({ onSelect }: AboutSectionProps) {
  return (
    <section className="w-full min-w-0 space-y-6 animate-fadeIn">
      <SectionTitle>About Me</SectionTitle>

      <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
        I'm a Master of Engineering (M.Eng.) student in Electrical and Computer Engineering at the{" "}
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-8 sm:mt-10">
        <SectionTitle className="!mt-0">Selected Projects</SectionTitle>

        <button
          onClick={() => onSelect?.("projects")}
          className="w-fit shrink-0 flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#1E293B] border border-[#334155] text-[#E2E8F0] 
                     text-xs sm:text-sm font-medium transition-all duration-300 
                     hover:border-[#06B6D4] hover:text-[#22D3EE] hover:bg-[#1E293B]/90"
        >
          See More Projects
          <HiArrowRight className="text-[#E2E8F0]" />
        </button>
      </div>

      <SelectedProjects />

      <SectionTitle className="mt-8 sm:mt-10">Tech Stacks</SectionTitle>
      <TechStackCard />
    </section>
  );
}