"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPortfolios } from "@/server/portfolio/getPortfolios";
import { BaseContainer } from "@/components/base-container";
import { LogoDisplayHeader } from "@/components/logo-display";
import { MainMenu } from "@/components/menu";
import { ExperienceCard } from "@/components/experience-card/experience-card";

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
      <header className="fixed top-0 z-50 flex w-full justify-between p-4">
        <LogoDisplayHeader />
        <div>
          <MainMenu />
        </div>
      </header>
      <main className="bg-gray-100">
        <section className="relative h-screen">
          <section className="relative z-10 h-full">
            <BaseContainer className="flex h-full flex-col justify-center gap-5">
              <h1 className="text-6xl text-gray-200 drop-shadow-sm lg:text-8xl xl:text-9xl">
                Curious to learn more?
              </h1>
              <p>Read about my journey, what I stand for, how I work</p>
              <Link href="#about-section">Read more</Link>
            </BaseContainer>
          </section>
          <div className="absolute left-0 top-0 w-full bg-slate-500">
            <section className="sticky top-0 h-screen">
              <div className="mix"></div>
              <Image
                src="https://picsum.photos/1200/1300"
                loading="lazy"
                alt="bg test image"
                title="bg test image"
                width={1200}
                height={600}
                className="size-full object-cover"
              />
            </section>
          </div>
        </section>

        <section className="">
          <BaseContainer>
            <ExperienceCard
              jobTitle="Sr. Front-end developer"
              companyDetails={{
                name: "DGN Publishers (Zorgkiezer.nl | Energiekiezer.nl)",
                logoUrl: "http://placehold.it/56/56",
              }}
              dateRange={["2023-03-01", "2024-01-01"]}
              tasks={[
                "Met a demanding deadline while upholding a commitment to prioritizing quality over quantity.",
                "Collaborating within a microservice architecture. It was important to uphold set standards and ensure quality across all projects",
                "Provided guidance to junior developers and actively participated in architectural and technical decision-making processes.",
                "Build core functionalities for the e-commerce platform, enabling users to customise the product, filter the products and proceed to the check-out page",
              ]}
              tools={["React", "NextJS", "Typescript", "GraphQL"]}
            />
          </BaseContainer>
        </section>

        <section id="about-section">
          <BaseContainer>
            What I do and stand for I consider myself not as a framework
            developer but as a Javascript developer. A framework is a tool to
            make building application easier. I tend to focus on writing read
            <ul>
              <li>Team player</li>
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
        <section className="">
          <BaseContainer>Brands worked with</BaseContainer>
        </section>
        <section className="">
          <BaseContainer>My stack</BaseContainer>
        </section>
        <section className="">
          <BaseContainer>My CV</BaseContainer>
        </section>
        <section className="">
          <BaseContainer>Teacher</BaseContainer>
        </section>
      </main>
    </>
  );
}
