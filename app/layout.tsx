import "./globals.css";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "a next.js project with typescript and tailwind",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <NavBar />
        <main className="max-w-3xl mx-auto py-20">{children}</main>
      </body>
    </html>
  );
}
