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
      <body className="bg-[#0F172A] text-[#F8FAFC] font-sans antialiased p-8">
        {/* main contaniner */}
        <div className="flex flex-row gap-8 items-start max-w-[1200px] mx-auto">
          {/* left part */}
          <Sidebar />
          {/* right part */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}