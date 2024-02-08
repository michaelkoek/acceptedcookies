"use client";

import { useEffect } from "react";
import Image from "next/image";
import { getPortfolios } from "@/server/portfolio/getPortfolios";

export default function Home() {
    useEffect(() => {
        const test = async () => {
            const product = await getPortfolios();
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
