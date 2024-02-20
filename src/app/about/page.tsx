"use client";

import { useEffect } from "react";
import { getPortfolios } from "@/server/portfolio/getPortfolios";
import { BaseContainer } from "@/components/base-container";
import { LogoDisplayHeader } from "@/components/logo-display";
import { MainMenu } from "@/components/menu";

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
      <header className="fixed top-0 flex w-full justify-between p-4">
        <LogoDisplayHeader />
        <div>
          <MainMenu />
        </div>
      </header>

      <main className="mt-24">
        <section>
          <BaseContainer>
            What I do and stand for I consider myself not as a framework
            developer but as a Javascript developer. A framework is a tool to
            make building application easier. I tend to focus on writing read
            <ul>
              <li>Team player</li>
              <li>Excellent problem solving skills</li>
              <li>Excellent problem solving skills</li>
              <li>Scalable and flexible code while using the best practices</li>
              <li>
                Attention to HTML semantics for better usability and SEO
                purposes
              </li>

              <button>Read more in About me</button>
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
