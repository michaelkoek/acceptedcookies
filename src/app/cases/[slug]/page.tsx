"use client";
import React, { useEffect } from "react";
import { getPortfolioItem } from "@/server/portfolio/getPortfolioItem";

export default function Page() {
    useEffect(() => {
        const test = async () => {
            const product = await getPortfolioItem("my-test");
            console.log({ product });
        };
        test();
    }, []);
    return <article>SLUG</article>;
}
