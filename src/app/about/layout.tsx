import type { ReactNode } from "react";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
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
    <>
      <section className="sticky top-0 flex flex-row items-center justify-between px-8 py-4">
        <Link href="/" className="z-20">
          <Image
            alt="Accepted Cookies logo"
            title="Accepted Cookies - front-end development"
            src="/images/accepted-cookies-logo.png"
            width={72}
            height={72}
          />
        </Link>
        <Mainmenu />
      </section>

      {children}

      {/* <Footer /> */}
    </>
  );
}
