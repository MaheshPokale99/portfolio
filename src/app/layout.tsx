import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mahesh Pokale | Full Stack Developer",
  description: "Full-stack developer with a strong DSA foundation, building real-time, scalable, and performance-driven web apps.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "TypeScript", "Node.js"],
  authors: [{ name: "Mahesh Pokale" }],
  openGraph: {
    title: "Mahesh Pokale | Full Stack Developer",
    description: "Full-stack developer with a strong DSA foundation, building real-time, scalable, and performance-driven web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
