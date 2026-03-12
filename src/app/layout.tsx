import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriMama - Fit Nutrition, Break the Future",
  description: "Platform lengkap untuk memantau nutrisi dan kesehatan ibu hamil berserta rencana makan cerdas berbasis AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
