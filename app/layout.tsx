// app/layout.tsx
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Kai-Lin (Kyle) Kao | Portfolio",
  description: "Personal portfolio website built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0F172A] text-[#F8FAFC] font-sans antialiased px-4 py-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:items-start max-w-[1200px] mx-auto">
          <Sidebar />
          <main className="w-full flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}