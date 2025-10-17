import Education from "../Education";
import WorkExperience from "../WorkExperience";
import OpenSourceContribution from "../OpenSourceContribution";
import SectionTitle from "../SectionTitle";


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
  