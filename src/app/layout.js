import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dancingFont = Dancing_Script({
  variable: "--font-Dancing_Script",
  subsets: ["latin"],
  weight: '700'
});

export const metadata = {
  title: "DjArtimus's Portfolio",
  description: "Explore the portfolio of Pratik / DjArtimus, a Full-Stack Developer specializing in creating dynamic, responsive, and scalable web applications. Discover innovative projects, cutting-edge skills, and a passion for solving complex problems with modern technologies like Next.js, MERN stack, and Supabase. Let's collaborate to turn ideas into impactful solutions!",
  keywords: ["Full-Stack Developer", "Next.js", "Next.js Developer", "MERN Stack", "MERN Stack Developer", "Supabase", "Frontend Developer", "DjArtimus", "Pratik", "Pratik Pansare"],
  icons: {
    icon: "/favicon.ico",
    apple: '/icons/apple-touch-icon.png'
  },
  manifest: '/manifest.json'
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dancingFont.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
