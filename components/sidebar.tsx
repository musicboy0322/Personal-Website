// components/Sidebar.tsx
import React from "react";
import Image from "next/image";
import { Mail, MapPin, FileText, Github, Linkedin } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-[#2a201b]/95 text-[#f1e7d0] w-fit min-w-[18rem] max-w-[22rem] p-6 rounded-2xl shadow-lg border border-[#3d2c20] m-6 flex flex-col items-center backdrop-blur-sm">
      {/* 🖼️ 個人照片 */}
      <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden border border-[#5c4033] shadow-md bg-[#1a1410]">
        <Image
          src="/headshot.jpeg"
          alt="Kai-Lin (Kyle) Kao"
          width={128}
          height={128}
          className="object-cover w-full h-full object-[center_30%]"
        />
      </div>

      {/* 上方：個人資訊 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 whitespace-nowrap text-[#f8f3e7]">
          Kai-Lin (Kyle) Kao
        </h1>
        <p className="text-[#d8c7a3] text-sm mb-6">Software Engineer</p>

        <ul className="space-y-4 text-left">
          {/* Location */}
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-[#f59e0b]" />
            <span className="text-[#f1e7d0] text-sm">Waterloo, Ontario</span>
          </li>

          {/* Email */}
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-[#f59e0b]" />
            <a
              href="mailto:kyle.kao.company@gmail.com"
              className="text-[#f1e7d0] text-sm hover:text-[#fbbf24] transition"
            >
              kyle.kao.company@gmail.com
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-3">
            <Github size={18} className="text-[#f59e0b]" />
            <a
              href="https://github.com/musicboy0322"
              target="_blank"
              rel="noreferrer"
              className="text-[#f1e7d0] text-sm hover:text-[#fbbf24] transition"
            >
              github.com/musicboy0322
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-3">
            <Linkedin size={18} className="text-[#f59e0b]" />
            <a
              href="https://www.linkedin.com/in/kyle-kao-software"
              target="_blank"
              rel="noreferrer"
              className="text-[#f1e7d0] text-sm hover:text-[#fbbf24] transition"
            >
              linkedin.com/in/kyle-kao-software
            </a>
          </li>

          {/* CV */}
          <li className="flex items-center gap-3">
            <FileText size={18} className="text-[#f59e0b]" />
            <a
              href="https://drive.google.com/file/d/1a_avnxFZCDcHHj-y6D8P6HUN2qjRw9Yu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-[#f1e7d0] text-sm hover:text-[#fbbf24] transition"
            >
              View CV
            </a>
          </li>
        </ul>
      </div>

      {/* 底部版權 */}
      <footer className="text-xs text-[#bfa87a] mt-6">
        © {new Date().getFullYear()} Kyle Kao
      </footer>
    </aside>
  );
}
