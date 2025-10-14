export default function ProjectSection() {
    return (
      <section className="space-y-6 animate-fadeIn">
        <h2 className="text-3xl font-bold text-[#06B6D4]">Projects</h2>
  
        <div>
          <h3 className="text-xl font-semibold text-[#F8FAFC]">
            AcmeAir Self-Adaptive System
          </h3>
          <p className="text-[#94A3B8] text-sm">
            Python, Kubernetes, OpenShift, Sysdig
          </p>
          <p className="text-[#E2E8F0]">
            Designed and implemented a MAPE-K feedback loop to dynamically scale
            cloud microservices based on system health metrics and ROI thresholds.
          </p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-[#F8FAFC]">CarTunes</h3>
          <p className="text-[#94A3B8] text-sm">FastAPI, WebSocket, React</p>
          <p className="text-[#E2E8F0]">
            A collaborative real-time music queue app that lets users share and
            control music playback during car rides.
          </p>
        </div>
      </section>
    );
  }
  