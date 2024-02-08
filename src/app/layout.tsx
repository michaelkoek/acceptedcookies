import type { ReactNode } from "react";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mainmenu } from "@/components/main-menu";
import { BaseContainer } from "@/components/base-container";

import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

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
                <section className="flex flex-row items-center justify-between sticky top-0 py-4 px-8">
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
                </section>

                {children}

                <footer className="p-8 bg-cyan-900">
                    <BaseContainer>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-500">
                                &copy; Accepted Cookies 🍪{" "}
                                {new Date().getFullYear()}
                            </p>
                            <nav className="flex flex-row gap-5">
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
                                <Link
                                    href="https://github.com/michaelkoek"
                                    title="Github"
                                    target="_blank"
                                >
                                    <svg
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </nav>
                        </div>
                    </BaseContainer>
                </footer>
            </body>
        </html>
    );
}
