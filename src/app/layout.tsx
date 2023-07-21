import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Samuel Gutmans Portfolio | Software Engineer",
  description:
    "I'm Samuel Gutmans, a software engineer with a knack for turning complex problems into simple, efficient solutions. Take a look through my portfolio to see how I apply my skills and adaptability across various software projects.",
  icons: "favicon.ico",
  keywords: [
    "Samuel Gutmans",
    "Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Fullstack Engineer",
  ],
  alternates: {
    canonical: "https://samuel-gutmans.ch",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="canonical"
          href="https://samuel-gutmans.ch"
          key="canonical"
        />
      </Head>
      <body className={`${fira_code.className}`}>{children}</body>
    </html>
  );
}
