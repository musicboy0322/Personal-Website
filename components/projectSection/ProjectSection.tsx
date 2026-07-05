import SectionTitle from "../shared/SectionTitle";
import Projects from "./components/Projects";

export default function ProjectSection() {
    return (
      <section className="space-y-6 animate-fadeIn">
        <SectionTitle>Mobile Application Projects</SectionTitle>
        <Projects type="mobile" />
        <SectionTitle>Full Stack Projects</SectionTitle>
        <Projects type="fullstack" />
        <SectionTitle>Backend Projects</SectionTitle>
        <Projects type="backend" />
        <SectionTitle>Distributed System Projects</SectionTitle>
        <Projects type="distributedSystem" />
        <SectionTitle>AI Projects</SectionTitle>
        <Projects type="ai" />
      </section>
    );
  }
  