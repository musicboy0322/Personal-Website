import SectionTitle from "../SectionTitle";
import TechStackCard from "../TechStackCard";
import SelectedProjects from "../SelectedProjects";

export default function AboutSection() {
  return (
    <section className="space-y-4 animate-fadeIn">
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

      <SectionTitle className="mt-10">Selected Projects</SectionTitle>
      <SelectedProjects />

      <SectionTitle className="mt-10">Tech Stacks</SectionTitle>
      <TechStackCard />
    </section>
  );
}
