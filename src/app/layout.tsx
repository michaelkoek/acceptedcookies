import type { ReactNode } from "react";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accepted Cookies - Freelance Sr. Front-end developer",
  description:
    "Freelance front-end developer who loves to create quality and robust code. Elegant solutions while able to explain the work to fellow developers",
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 *
 * css make image fit
 * aspect-ratio: 3 / 2;
 * object-fit: contain;
 * mix-blend-mode: color-burn;
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
