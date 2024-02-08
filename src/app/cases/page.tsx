"use client";
import { useEffect } from "react";
import { getPortfolios } from "@/server/portfolio/getPortfolios";

interface ICasePage {
    caseSlug: string;
}

export default function Page() {
    useEffect(() => {
        const test = async () => {
            const product = await getPortfolios();
        };
        test();
    }, []);
    return <article>df</article>;
}
