import ProjectCard from "../../shared/ProjectCard";

export default function SelectedProjects() {
    const projects = [
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
      {
        title: "Distributed Ledger",
        description: "Built a blockchain-like distributed ledger system to explore concurrency, replication, and consistency across nodes.",
        link: "https://github.com/musicboy0322/Distributed-Ledger",
        tags: [
            { icon: "/icons/programmingLanguage/go.svg", label: "Golang" },
            { icon: <span className="text-[13px]">🔌</span>, label: "Socket" },
            { icon: "/icons/devops/docker.svg", label: "Docker" },
            { icon: "/icons/devops/kubernetes.svg", label: "Kubernetes" },
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
  