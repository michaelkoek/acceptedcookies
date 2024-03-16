"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getPortfolios } from "@/server/portfolio/getPortfolios";
import type { IPortfolioItem } from "@/server/portfolio/getPortfolios";
import { BaseContainer } from "@/components/base-container";
import { LogoDisplayHeader } from "@/components/logo-display";
import { MainMenu } from "@/components/menu";
import { ExperienceCard } from "@/components/experience-card";
import { btnStyle } from "@/components/button";
import { StackItem } from "@/components/stack-item";
import { TeachChart } from "@/components/teach-chart";

export default function About() {
  const [experienceItems, setExperienceItems] = useState<IPortfolioItem[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const product = await getPortfolios();
      setExperienceItems(product.portfolios);
    };
    fetchExperiences();
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
          <BaseContainer className="relative z-10 flex h-full flex-col justify-center gap-5">
            <h1 className="text-6xl text-gray-200 drop-shadow-sm lg:text-8xl xl:text-9xl">
              Curious to learn more?
            </h1>
            <p>Read about my journey, what I stand for, how I work</p>
            <Link href="#about-section" className={btnStyle}>
              Read more
            </Link>
          </BaseContainer>

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

        <section id="about-section">
          <BaseContainer className="py-6">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 drop-shadow-sm">
              About me
            </h2>
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

        <BaseContainer className="py-6">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 drop-shadow-sm">
            Experience
          </h2>
          <section className="grid gap-6 md:grid-cols-3">
            <section className="col-span-2 flex flex-col gap-4">
              {experienceItems.map((expItem) => (
                <ExperienceCard
                  key={expItem.id}
                  jobTitle={expItem.jobPosition}
                  companyDetails={{
                    name: expItem.title,
                    logoUrl: "http://placehold.it/56/56",
                  }}
                  dateRange={[expItem.startingDate, expItem.endDate]}
                  tasks={expItem.taskSummary}
                  tools={expItem.tools}
                >
                  {expItem.description}
                </ExperienceCard>
              ))}
            </section>
            <section className="col-span-2 md:col-span-1">
              <motion.article
                initial={{ opacity: 0, translateY: 30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.01,
                }}
                className="sticky top-10 flex flex-col items-center justify-center gap-6 rounded-md bg-white p-4 md:p-8"
              >
                <Image
                  loading="lazy"
                  src="http://placehold.it/100x100"
                  title="selfie Michael Koek"
                  alt="Michael Koek"
                  className="rounded-full border-4 border-slate-400 transition-transform ease-out hover:scale-110 hover:shadow-md"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-semibold text-gray-950">Michael Koek</h3>
                  <h4 className="font-semibold text-gray-400">
                    Front-end developer
                  </h4>
                </div>
                <div className="flex w-full flex-col gap-4">
                  <Link
                    href="#"
                    title="download my CV in pdf"
                    className={btnStyle}
                  >
                    Download resume
                  </Link>
                  <Link
                    href="/contact"
                    title="Get in touch"
                    className={btnStyle}
                  >
                    Contact me
                  </Link>
                </div>

                <div>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer relative block h-7 w-[3.2rem] rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:shadow-lg after:transition-all after:content-[''] peer-checked:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-red-900 dark:bg-red-800 dark:peer-focus:ring-blue-800"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Available for work?
                    </span>
                  </label>
                </div>
              </motion.article>
            </section>
          </section>
        </BaseContainer>

        <section className="bg-white">
          <BaseContainer className="py-40">
            <div className="grid-row-3 grid items-center gap-4 md:grid-cols-3">
              <div>
                <h2 className="mb-4 text-4xl font-bold text-gray-800 drop-shadow-sm">
                  My stack
                </h2>
                <p>
                  I consider myself not as a framework developer but as a
                  Javascript developer. A framework is a tool to make building
                  application easier. I focus more on writing clean and readable
                  code. I stay up to date with the latest development in the dev
                  world. I like to keep up, investigate and spot with trends.
                  Having experience with all of these tools made me a fast
                  learner and excellent documentation reading skills.
                </p>
              </div>

              <div className="relative col-span-2 justify-self-center">
                <Image
                  alt="my skills"
                  width={400}
                  height={80}
                  src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,nextjs,svelte,nodejs,ts,graphql,docker,emotion,figma,git,github,gitlab,ai,mongodb,npm,py,sass,sentry,threejs,visualstudio&perline=6"
                />

                <div className="bg-line pointer-events-none absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-b from-transparent to-white" />
              </div>
            </div>
          </BaseContainer>
        </section>
        <section className=" py-6">
          <BaseContainer>Brands worked with</BaseContainer>
        </section>
        {/* <section className="bg-gray-900">
          <BaseContainer className="flex h-screen flex-col justify-around py-6">
            <h2 className="mb-4 text-4xl font-bold text-gray-200 drop-shadow-sm">
              Teaching
            </h2>
            <TeachChart />
          </BaseContainer>
        </section> */}

        <BaseContainer className="py-6">completed courses</BaseContainer>
      </main>
    </>
  );
}
