"use client";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";

export const Mainmenu = () => {
    return (
        <section>
            <MenuTrigger />
            <section className="container">
                <nav>
                    <Link href="#" title="homepage">
                        Home
                    </Link>
                    <Link href="#" title="portfolio">
                        Portfolio
                    </Link>
                    <Link href="#" title="about me">
                        About me
                    </Link>
                    <Link href="#" title="contact">
                        Contact
                    </Link>
                </nav>
            </section>
        </section>
    );
};
