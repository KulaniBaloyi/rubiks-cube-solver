import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubiks Cube Solver",
  description: "App directed to help you solve your rubiks cube from anywhere with helpful animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto bg-[#353839] text-white">{children}</body>
    </html>
  );
}
