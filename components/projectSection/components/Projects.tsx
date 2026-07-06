import ProjectCard from "../../shared/ProjectCard";
import React from "react";

interface Tag {
  icon: string | React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  tags: Tag[];
}

interface ProjectsProps {
  type?: "mobile" | "backend" | "fullstack" | "distributedSystem" | "ai";
}

export default function Projects({ type }: ProjectsProps) {
  // Mobile
  const mobile: Project[] = [
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
  ];

  // Full Stack
  const fullstack: Project[] = [
    {
      title: "Orizuru",
      description:
        "A federated, decentralized Q&A platform implementing the ActivityPub protocol that allows users to host independent instances and securely track and manage questions across different servers without an account.",
      tags: [
        { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
        { icon: "/icons/frontend/svelte.svg", label: "Svelte" },
        { icon: "/icons/frontend/tailwindcss.svg", label: "Tailwind CSS" },
        { icon: "/icons/database/postgresql.svg", label: "PostgreSQL" },  
        { icon: "/icons/devops/playwright.svg", label: "Playwright" },  
        { icon: "/icons/distributedSystem/trpc.svg", label: "tRPC" }, 
        { icon: "/icons/database/drizzleorm.svg", label: "Drizzle ORM" }, 
        { icon: "/icons/cloud/cloudflare.svg", label: "Cloudflare R2" }, 
      ],
    },
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

  // Backend
  const backend: Project[] = [
    {
      title: "TableMate",
      description: "A social dining platform that connects people through shared meals, smart matching, and restaurant experiences.",
      link: "https://github.com/musicboy0322/Architecture-Designs/blob/main/tablemate-architecture.md",
      tags: [
      { icon: "/icons/programmingLanguage/go.svg", label: "Golang" },
      { icon: "/icons/programmingLanguage/shell.svg", label: "Shell" },
      { icon: "/icons/cloud/aws.svg", label: "AWS Cognito" },
      { icon: "/icons/cloud/aws.svg", label: "AWS DynamoDB" },
      { icon: "/icons/cloud/aws.svg", label: "AWS Lambda" },
      { icon: "/icons/cloud/aws.svg", label: "AWS Gateway" },
      { icon: "/icons/cloud/aws.svg", label: "AWS CloudWatch" },
      ],
    },
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

  // Distributed System
  const distributed: Project[] = [
      {
        title: "Self-Adaptive CarTunes",
        description:
          "A self-adaptive control engine implementing a MAPE-K feedback loop to dynamically optimize microservice-level QoS and application-level QoE in the CarTunes system.",
        link: "https://github.com/musicboy0322/Self-Adaptive-CarTunes",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/programmingLanguage/javascript.svg", label: "JavaScript" },
          { icon: "/icons/programmingLanguage/shell.svg", label: "Shell" },
          { icon: "/icons/devops/k6.svg", label: "k6" },
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
    },
    {
        title: "Waterloo ECE751 Distributed and Network-Centric Computing",
        description:
        "Learned core principles of distributed and network-centric systems, including scalability, fault tolerance, and coordination, through hands-on projects involving large-scale data processing, distributed messaging, and service coordination.",
        link: "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies/current-students/courses/ece-graduate-course-archive/fall-2025-courses",
        tags: [
          { icon: "/icons/programmingLanguage/java.svg", label: "Java" },
          { icon: "/icons/programmingLanguage/scala.svg", label: "Scala" },
          { icon: "/icons/distributedSystem/apache.svg", label: "Thrift" },
          { icon: "/icons/distributedSystem/apache.svg", label: "Hadoop" },
          { icon: "/icons/distributedSystem/apache.svg", label: "Spark" },
          { icon: "/icons/distributedSystem/apache.svg", label: "ZooKeeper" },
          { icon: "/icons/distributedSystem/apache.svg", label: "Kafka" },
        ],
    },
    {
        title: "Self-Adaptive Acme Air",
        description:
          "A self-adaptive adaptation engine implementing a MAPE-K feedback loop to autonomously optimize microservice-level performance in the Acme Air system.",
        link: "https://github.com/musicboy0322/Self-Adaptive-AcmeAir",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/programmingLanguage/shell.svg", label: "Shell" },
          { icon: "/icons/devops/apache.svg", label: "JMeter" },
          { icon: "/icons/cloud/ibmcloud.svg", label: "IBM Cloud Openshift" },
        ],
    },
  ];

  // AI
  const ai: Project[] = [
    {
        title: "NER Model Learning",
        description:
            "Fine-tuned a Chinese BERT model for named entity recognition to extract actor and category information from text.",
        link: "https://github.com/musicboy0322/NER-Model-Learning",
        tags: [
          { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
          { icon: "/icons/ai/pytorch.svg", label: "PyTorch" },
        ],
    },
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
    mobile: mobile,
    fullstack: fullstack,
    backend: backend,
    distributedSystem: distributed,
    ai: ai,
  };

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
