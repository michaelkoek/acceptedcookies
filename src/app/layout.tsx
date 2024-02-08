import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mainmenu } from "@/components/main-menu";
import { BaseContainer } from "@/components/base-container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Accepted Cookies - Freelance Sr. Fullstack developer",
    description:
        "Freelance front-end developer who loves to create quality and robust code. Elegant solutions while able to explain the work to fellow developers",
    icons: {
        icon: "/favicon/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-row items-center justify-between sticky top-0 py-4 px-8">
                    <Link href="/" className="z-20">
                        <Image
                            alt="Accepted Cookies logo"
                            title="Accepted Cookies - fullstack development"
                            src="/images/accepted-cookies-logo.png"
                            width={72}
                            height={72}
                        />
                    </Link>
                    <Mainmenu />
                </header>
                <main className="min-h-full">{children}</main>
                <footer className="p-8 bg-cyan-900">
                    <BaseContainer>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-500">
                                &copy; Accepted Cookies 🍪{" "}
                                {new Date().getFullYear()}
                            </p>
                            <div>
                                <Link
                                    href="https://www.linkedin.com/in/michael-koek/"
                                    title="LinkedIn"
                                    target="_blank"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </BaseContainer>
                </footer>
            </body>
        </html>
    );
}
