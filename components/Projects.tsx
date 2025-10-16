import ProjectCard from "@/components/ProjectCard";
import React from "react";

interface Tag {
  icon: string | React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
  tags: Tag[];
}

interface SelectedProjectsProps {
  type?: "backend" | "fullstack" | "distributedSystem" | "ai";
}

export default function SelectedProjects({ type }: SelectedProjectsProps) {
  // --- Backend ---
  const backend: Project[] = [
    {
        title: "CarTunes",
        description: "A collaborative music queue for road trips. Submit your favorite songs via LINE and enjoy synchronized playback through a web-based player.",
        link: "https://github.com/HappyGroupHub/CarTunes",
        tags: [
        { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
        { icon: "/icons/backend/fastapi.svg", label: "FastAPI" },
        { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
        { icon: <span className="text-[13px]">📡</span>, label: "WebSocket" },
        ],
    },
    {
        title: "IO Record Form API",
        description: "A backend RESTful API for the IO Record Form Web system, designed to record and manage I/O form data.",
        link: "https://github.com/musicboy0322/IO-Record-Form-API",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/backend/flask.svg", label: "Flask" },
          { icon: "/icons/database/mysql.svg", label: "MySQL" },
          { icon: "/icons/database/redis.svg", label: "Redis" },
          { icon: "/icons/devops/docker.svg", label: "Docker" },
          { icon: "/icons/devops/githubactions.svg", label: "GitHub Actions" },
        ],
    },
    {
        title: "Flask CI/CD Tutorial",
        description:
            "A complete backend development tutorial covering development, testing, deployment, and CI/CD configuration.",
        link: "https://github.com/musicboy0322/Flask-CICD-Tutorial",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/backend/flask.svg", label: "Flask" },
          { icon: "/icons/devops/docker.svg", label: "Docker" },
          { icon: "/icons/devops/githubactions.svg", label: "GitHub Actions" },
        ],
    },
    {
        title: "Basic API Tutorial",
        description:
            "A RESTful API development tutorial that guides you through building your own API from scratch.",
        link: "https://github.com/musicboy0322/Basic-API-Tutorial",
        tags: [
        { icon: "/icons/programmingLanguage/javascript.svg", label: "JavaScript" },
        { icon: "/icons/backend/nodejs.svg", label: "Node.js" },
        { icon: "/icons/database/mongodb.svg", label: "MongoDB" },
        ],
    },
  ];

  // --- Full Stack ---
  const fullstack: Project[] = [
    {
      title: "Personal Website",
      description: "A personal portfolio website to showcase my projects and experience.",
      link: "https://github.com/musicboy0322/Personal-Website",
      tags: [
            { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
            { icon: "/icons/frontend/react.svg", label: "React" },
            { icon: "/icons/frontend/nextjs.svg", label: "Next.js" },
            { icon: "/icons/frontend/tailwindcss.svg", label: "Tailwind CSS" },
      ],
    },
    {
        title: "Surgery Scheduling Website",
        description:
          "A web application that optimizes surgery scheduling and operating room management for hospital.",
        link: "https://github.com/musicboy0322/Surgery-Scheduling-Website",
        tags: [
            { icon: "/icons/programmingLanguage/javascript.svg", label: "JavaScript" },
            { icon: "/icons/backend/nodejs.svg", label: "Node.js" },
            { icon: "/icons/frontend/ejs.svg", label: "EJS" },
            { icon: "/icons/database/mysql.svg", label: "MySQL" },       
        ],
      },
  ];

  // --- Distributed System ---
  const distributed: Project[] = [
    {
        title: "Acme Air Self-adaptive Driver",
        description:
          "A self-adaptive driver implementing the MAPE-K feedback loop to optimize microservice performance within the Acme Air system.",
        link: "https://github.com/musicboy0322/Acme-Air-Self-Adaptive-Driver",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/programmingLanguage/shell.svg", label: "Shell" },
          { icon: "/icons/cloud/ibmcloud.svg", label: "IBM Cloud Openshift" },
        ],
    },
    {
        title: "Distributed Ledger",
        description:
        "Implemented a blockchain-like distributed ledger system to explore consensus, replication, and node synchronization using socket connections.",
        link: "https://github.com/musicboy0322/Distributed-Ledger",
        tags: [
        { icon: "/icons/programmingLanguage/go.svg", label: "Golang" },
        { icon: <span className="text-[13px]">🔌</span>, label: "Socket" },
        { icon: "/icons/devops/docker.svg", label: "Docker" },
        { icon: "/icons/devops/kubernetes.svg", label: "Kubernetes" },
        ],
    }
  ];

  // --- AI ---
  const ai: Project[] = [
    {
      title: "AI Learning",
      description:
        "A collection of machine learning and deep learning exercises focused on data analysis and classification tasks.",
      link: "https://github.com/musicboy0322/AI-Learning",
      tags: [
        { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
        { icon: "/icons/ai/pandas.svg", label: "Pandas" },
        { icon: "/icons/ai/numpy.svg", label: "NumPy" },
        { icon: "/icons/ai/matplotlib.svg", label: "Matplotlib" },
        { icon: "/icons/ai/scikitlearn.svg", label: "scikit-learn" },
        { icon: "/icons/ai/keras.svg", label: "Keras" },
      ],
    },
  ];

  const categories = {
    backend: backend,
    fullstack: fullstack,
    distributedSystem: distributed,
    ai: ai,
  };

  // ✅ 如果有指定 type，僅顯示該分類；否則顯示全部
  const selectedProjects = type ? categories[type] : Object.values(categories).flat();

  return (
    <section className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 gap-6">
        {selectedProjects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>
    </section>
  );
}
