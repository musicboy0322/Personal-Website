// components/TechStackCard.tsx
export default function TechStackCard() {
    const programmingLanguages = [
        { icon: "/icons/programmingLanguage/python.svg", label: "Python" },
        { icon: "/icons/programmingLanguage/java.svg", label: "Java" },
        { icon: "/icons/programmingLanguage/go.svg", label: "Golang" },
        { icon: "/icons/programmingLanguage/javascript.svg", label: "JavaScript" },
        { icon: "/icons/programmingLanguage/typescript.svg", label: "TypeScript" },
        { icon: "/icons/programmingLanguage/shell.svg", label: "Shell" },
        { icon: "/icons/programmingLanguage/scala.svg", label: "Scala" },
    ];
  
    const frontend = [
      { icon: "/icons/frontend/html.svg", label: "HTML" },
      { icon: "/icons/frontend/css.svg", label: "CSS" },
      { icon: "/icons/frontend/tailwindcss.svg", label: "Tailwind CSS" },
      { icon: "/icons/frontend/react.svg", label: "React" },
      { icon: "/icons/frontend/nextjs.svg", label: "Next.js" },
      { icon: "/icons/frontend/ejs.svg", label: "EJS" },
    ];

    const backend = [
        { icon: "/icons/backend/nodejs.svg", label: "Node.js" },
        { icon: "/icons/backend/flask.svg", label: "Flask" },
        { icon: "/icons/backend/fastapi.svg", label: "FastAPI" },
        { icon: "/icons/backend/springboot.svg", label: "Spring Boot" },
    ]

    const dataBase = [
        { icon: "/icons/database/mysql.svg", label: "MySQL" },
        { icon: "/icons/database/mongodb.svg", label: "MongoDB" },
        { icon: "/icons/database/redis.svg", label: "Redis" },
        { icon: "/icons/database/elasticsearch.svg", label: "Elasticsearch" },
        { icon: "/icons/database/supabase.svg", label: "Supabase" },
    ];

    const devops = [
        { icon: "/icons/devops/git.svg", label: "Git" },
        { icon: "/icons/devops/docker.svg", label: "Docker" },
        { icon: "/icons/devops/kubernetes.svg", label: "Kubernetes" },
        { icon: "/icons/devops/githubactions.svg", label: "GitHub Actions" },
        { icon: "/icons/devops/apache.svg", label: "JMeter" },
        { icon: "/icons/devops/k6.svg", label: "k6" },
    ];

    const cloud = [
        { icon: "/icons/cloud/azure.svg", label: "Azure OpenAI" },
        { icon: "/icons/cloud/aws.svg", label: "AWS EC2" },
        { icon: "/icons/cloud/ibmcloud.svg", label: "IBM Cloud Openshift" },
    ];

    const distributedSystem = [
        { icon: <span className="text-[13px]">📡</span>, label: "WebSocket" },
        { icon: <span className="text-[13px]">🔌</span>, label: "Socket" },
        { icon: "/icons/distributedSystem/apache.svg", label: "Thrift" },
        { icon: "/icons/distributedSystem/apache.svg", label: "Hadoop" },
        { icon: "/icons/distributedSystem/apache.svg", label: "Spark" },
        { icon: "/icons/distributedSystem/apache.svg", label: "ZooKeeper" },
        { icon: "/icons/distributedSystem/apache.svg", label: "Kafka" },
    ];

    const ai = [
        { icon: "/icons/ai/pandas.svg", label: "Pandas" },
        { icon: "/icons/ai/numpy.svg", label: "NumPy" },
        { icon: "/icons/ai/matplotlib.svg", label: "Matplotlib" },
        { icon: "/icons/ai/scikitlearn.svg", label: "scikit-learn" },
        { icon: "/icons/ai/keras.svg", label: "Keras" },
        { icon: "/icons/ai/pytorch.svg", label: "PyTorch" },
    ]
  
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Programming Languages --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {programmingLanguages.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* --- Frontend --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-3">
            {frontend.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Backend --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Backend
          </h3>
          <div className="flex flex-wrap gap-3">
            {backend.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Database --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Database
          </h3>
          <div className="flex flex-wrap gap-3">
            {dataBase.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Cloud --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Cloud
          </h3>
          <div className="flex flex-wrap gap-3">
            {cloud.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- DevOps --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            DevOps
          </h3>
          <div className="flex flex-wrap gap-3">
            {devops.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                />
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Distributed System --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            Distributed System
          </h3>
          <div className="flex flex-wrap gap-3">
            {distributedSystem.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                {typeof tech.icon === "string" ? (
                    <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                    />
                ) : (
                    <div className="text-[13px]">{tech.icon}</div>
                )}
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- AI --- */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            AI
          </h3>
          <div className="flex flex-wrap gap-3">
            {ai.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A]/60 border border-[#334155] text-sm text-[#E2E8F0]"
              >
                {typeof tech.icon === "string" ? (
                    <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-[13px] h-[13px] object-contain"
                    />
                ) : (
                    <div className="text-[13px]">{tech.icon}</div>
                )}
                <span className="text-[13px]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
