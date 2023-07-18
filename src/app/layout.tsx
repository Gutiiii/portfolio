import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Samuel Gutmans Portfolio",
  description:
    "I'm Samuel Gutmans, a software engineer with a knack for turning complex problems into simple, efficient solutions. Take a look through my portfolio to see how I apply my skills and adaptability across various software projects, always striving for excellence.",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Samuel Gutmans, Portfolio, Software Engineer, Frontend Engineer, Backend Engineer, Fullstack Engineer"
        />
      </head>
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
