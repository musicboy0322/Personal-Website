export default function AboutSection() {
  return (
    <section className="space-y-4 animate-fadeIn">
      <h2 className="text-3xl font-bold text-[#06B6D4]">About Me</h2>
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
        . I graduated with a Bachelor of Science (B.S.) in Medical Informatics and Innovative Application at the {" "}
        <a
          target="_blank"
          href="https://www.fju.edu.tw/indexEN.jsp"
          className="text-[#06B6D4] font-medium hover:text-[#22D3EE] hover:underline transition-colors duration-200">
          Fu Jen Catholic University
        </a>
        .
      </p>
    </section>
  );
}
