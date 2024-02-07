"use client";
import React, { useEffect } from "react";
import { getPortfolioItems } from "@/server/portfolio/getPortfolioItem";
import { getPortfolios } from "@/server/portfolio/getPortfolios";

interface ICasePage {
    caseSlug: string;
}

export default function Page() {
    useEffect(() => {
        const test = async () => {
            const product = await getPortfolios();
            console.log({ product });
        };
        test();
    }, []);
    return <article>df</article>;
}
