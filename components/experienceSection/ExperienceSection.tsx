import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import OpenSourceContribution from "./components/OpenSourceContribution";
import SectionTitle from "../shared/SectionTitle";


export default function ExperienceSection() {
    return (
      <section className="space-y-6 animate-fadeIn">
        <SectionTitle>Education</SectionTitle>
        <Education />
        <SectionTitle>Work Experience</SectionTitle>
        <WorkExperience />
        <SectionTitle>Open Source Contribution</SectionTitle>
        <OpenSourceContribution />
      </section>
    );
  }
  