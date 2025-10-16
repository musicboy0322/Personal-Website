import SectionTitle from "../SectionTitle";
import Projects from "../Projects";

export default function ProjectSection() {
    return (
      <section className="space-y-6 animate-fadeIn">
        <SectionTitle>Backend Projects</SectionTitle>
        <Projects type="backend" />
        <SectionTitle>Full Stack Projects</SectionTitle>
        <Projects type="fullstack" />
        <SectionTitle>Distributed System Projects</SectionTitle>
        <Projects type="distributedSystem" />
        <SectionTitle>AI Projects</SectionTitle>
        <Projects type="ai" />

      </section>
    );
  }
  