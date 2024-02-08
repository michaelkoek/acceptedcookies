"use client";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";

export const Mainmenu = () => {
    return (
        <section>
            <MenuTrigger />
            <section className="container">
                <nav>
                    <Link href="/" title="homepage">
                        Home
                    </Link>
                    <Link href="/cases" title="portfolio">
                        Portfolio
                    </Link>
                    <Link href="/about-me" title="about me">
                        About me
                    </Link>
                    <Link href="/contact" title="contact">
                        Contact
                    </Link>
                </nav>
            </section>
        </section>
    );
};
