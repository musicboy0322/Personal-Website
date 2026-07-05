import ProjectCard from "../../shared/ProjectCard";

export default function SelectedProjects() {
    const projects = [
      {
        title: "Arivo",
        description: 
          "A mobile app designed to increase awareness of how time is spent through countdowns, focus sessions, and daily activity insights.",
        link: "https://apps.apple.com/us/app/arove/id6773894984",
        tags: [
          { icon: "/icons/frontend/react.svg", label: "React Native" },
          { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
          { icon: "/icons/frontend/tailwindcss.svg", label: "Tailwind CSS" },
          { icon: "/icons/database/sqlite.svg", label: "SQLite" }, 
        ],
      },
      {
        title: "CarTunes",
        description: "A collaborative music queue for road trips. Submit your favorite song via LINE, enjoy the vibes with a web-based player.",
        link: "https://github.com/HappyGroupHub/CarTunes",
        tags: [
            { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
            { icon: "/icons/backend/fastapi.svg", label: "FastAPI" },          
            { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
            { icon: <span className="text-[14px]">📡</span>, label: "WebSocket" },
        ],
      },
    ];
  
    return (
      <section className="space-y-6 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
    );
  }
  