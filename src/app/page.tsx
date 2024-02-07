"use client";

import { getPortfolioItems } from "@/server/portfolio/getPortfolioItem";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const test = async () => {
            const product = await getPortfolioItems("my-test");
            console.log({ product });
        };
        test();
    }, []);

    return (
        <>
            <article className="">
                <h1 className="">Accepted Cookies</h1>
                <p>Experience delicious bite sized development</p>
            </article>

            <article>
                <section></section>
            </article>
        </>
    );
}
