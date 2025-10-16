"use client";
import React from "react";

interface NavbarProps {
  active: string;
  onSelect: (value: string) => void;
}

export default function Navbar({ active, onSelect }: NavbarProps) {
  const items = [
    { id: "about", label: "About" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav
        className="mx-auto mb-8 w-fit px-8 py-3
             bg-[#1E293B] text-[#F8FAFC]
             border border-[#334155] rounded-2xl
             shadow-[0_4px_20px_rgba(6,182,212,0.3)]
             backdrop-blur-md flex items-center gap-8
             overflow-visible"
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`text-sm font-medium transition-all duration-200 ${
            active === item.id
              ? "text-[#06B6D4] border-b-2 border-[#22D3EE]"
              : "hover:text-[#22D3EE] text-[#E2E8F0]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
