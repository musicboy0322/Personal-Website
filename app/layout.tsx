// app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Kyle Kao | Portfolio",
  description: "Personal portfolio website built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-[#0F172A] text-[#F8FAFC] font-sans antialiased p-8"
      >
        {/* ✅ 主容器（固定 Sidebar + 主內容） */}
        <div className="flex flex-row gap-8 items-start max-w-[1200px] mx-auto">
          {/* Sidebar 區塊 */}
          <Sidebar />

          {/* 右側主內容（由 page.tsx 控制 Navbar + 區塊切換） */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
