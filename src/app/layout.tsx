import type { ReactNode } from "react";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Mainmenu } from "@/components/menu";
import { Footer } from "@/components/footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accepted Cookies - Freelance Sr. Fullstack developer",
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
    <html lang="en">
      <body className={inter.className}>
        <section>{children}</section>
      </body>
    </html>
  );
}
