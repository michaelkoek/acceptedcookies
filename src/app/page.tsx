"use client";

import { useEffect } from "react";
import { getPortfolios } from "@/server/portfolio/getPortfolios";
import { BaseContainer } from "@/components/base-container";

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
      <header className="min-h-[calc(100vh/3)]">
        <BaseContainer>
          <section className="grid md:grid-cols-[calc((100%/3)*2),1fr]">
            <section>
              <h1 className="text-5xl font-bold md:text-8xl">
                Accepted Cookies
              </h1>
              <p>Experience delicious bite sized development</p>
            </section>
            <section>img</section>
          </section>
        </BaseContainer>
      </header>

      <main>
        <section>
          <BaseContainer>
            What I do
            <ul>
              <li></li>
            </ul>
          </BaseContainer>
        </section>
        <section>
          <BaseContainer>Brands worked with</BaseContainer>
        </section>
        <section>
          <BaseContainer>My stack</BaseContainer>
        </section>
        <section>
          <BaseContainer>Teacher</BaseContainer>
        </section>
      </main>
    </>
  );
}
