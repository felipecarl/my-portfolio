import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/data";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Felipe Carl | Full-Stack Software Engineer";
const description =
  "Full-Stack Software Engineer with 6+ years of experience building React, TypeScript, Node.js, NestJS, SaaS, micro-frontend, design system, and developer platform solutions for international teams.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title,
  description,
  keywords: [
    "Full-Stack Software Engineer",
    "React Software Engineer",
    "TypeScript Developer",
    "NestJS Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Remote Software Engineer",
    "Brazilian Software Engineer",
    "LATAM Developer",
    "SaaS Engineer",
    "Design Systems",
    "Micro-Frontends",
    "U.S. Remote Developer",
  ],
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
