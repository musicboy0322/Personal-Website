// app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/sidebar";

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
    <body className="bg-gray-900 text-gray-100 font-sans antialiased flex flex-col md:flex-row items-start">
      <div className="md:sticky md:top-6 md:left-6 md:self-start">
        <Sidebar />
      </div>
      <main className="flex-1 p-6">{children}</main>
    </body>
  </html>
  );
}
