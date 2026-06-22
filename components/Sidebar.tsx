import React from "react";
import Image from "next/image";
import { Mail, MapPin, FileText, Github, Linkedin } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
        className="sticky top-0 self-start 
                    bg-[#1E293B] text-[#F8FAFC] 
                    w-fit min-w-[18rem] max-w-[22rem] 
                    p-6 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.25)] 
                    border border-[#334155] 
                    flex flex-col items-center backdrop-blur-sm 
                    mt-7"
    >

      {/* Personal Picture */}
      <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden border border-[#22D3EE]/50 shadow-[0_0_20px_#22D3EE40]">
        <Image
          src="/headshot.jpeg"
          alt="Kai-Lin (Kyle) Kao"
          width={128}
          height={128}
          className="object-cover w-full h-full object-[center_30%]"
        />
      </div>

      {/* Personal Information */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 whitespace-nowrap text-[#F8FAFC]">
          Kai-Lin (Kyle) Kao
        </h1>
        <p className="text-[#94A3B8] text-sm mb-6">Software Engineer</p>

        <ul className="space-y-4 text-left">
          {/* Location */}
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-[#06B6D4]" />
            <span className="text-sm text-[#E2E8F0]">Waterloo, Ontario</span>
          </li>

          {/* Email */}
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-[#06B6D4]" />
            <a
              href="mailto:kyle.kao.company@gmail.com"
              className="text-sm hover:text-[#22D3EE] transition"
            >
              kyle.kao.company@gmail.com
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-3">
            <Github size={18} className="text-[#06B6D4]" />
            <a
              href="https://github.com/musicboy0322"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-[#22D3EE] transition"
            >
              github.com/musicboy0322
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-3">
            <Linkedin size={18} className="text-[#06B6D4]" />
            <a
              href="https://www.linkedin.com/in/kyle-kao-software"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-[#22D3EE] transition"
            >
              linkedin.com/in/kyle-kao-software
            </a>
          </li>

          {/* CV */}
          <li className="flex items-center gap-3">
            <FileText size={18} className="text-[#06B6D4]" />
            <a
              href="https://drive.google.com/file/d/1UWRNm9szjVr5pyJibeZ2rKOuwrhuIjov/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-[#22D3EE] transition"
            >
              View CV
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <footer className="text-xs text-[#64748B] mt-6">
        © {new Date().getFullYear()} Kyle Kao
      </footer>
    </aside>
  );
}
