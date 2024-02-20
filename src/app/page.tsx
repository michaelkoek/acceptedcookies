"use client";

import { useEffect } from "react";
import { getPortfolios } from "@/server/portfolio/getPortfolios";
import { BaseContainer } from "@/components/base-container";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  CodeBracketSquareIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { HomeInfoBlock } from "@/components/home-info-block";

export default function Home() {
  useEffect(() => {
    const test = async () => {
      const product = await getPortfolios();
      console.log({ product });
    };
    test();
  }, []);

  return (
    <main className="h-lvh">
      <div className="absolute left-[50%] top-6 translate-x-[-50%]">
        <nav className="flex items-center rounded-full border bg-slate-300/70 p-1 backdrop-blur-xl">
          <div className="rounded-full bg-white p-3">
            <Bars3Icon className="h-6 w-6" />
          </div>
          <Link href="/about" title="about me" className="px-4">
            About
          </Link>
          <Link href="/cases" title="cases" className="px-4">
            Cases
          </Link>
          <Link href="/blog" title="blog" className="px-4">
            Readables
          </Link>
          <Link href="/stickers" title="stickers" className="px-4">
            Stickables
          </Link>
          <Link href="/contact" title="contact" className="px-4">
            Contactables
          </Link>
        </nav>
      </div>
      <section className="grid h-full grid-cols-3">
        <article className="col-span-2 flex flex-col justify-between ">
          <header className="p-4">
            <Link href="/">
              <Image
                alt="Accepted Cookies logo"
                title="Accepted Cookies - front-end development"
                src="/images/accepted-cookies-logo.png"
                width={72}
                height={72}
              />
            </Link>
          </header>

          <section className="flex h-full items-center">
            <section className="px-4 md:px-12">
              <section className="flex flex-col gap-4">
                <h1 className="text-3xl md:text-[calc(16px+16*(100vw-568px)/200)] md:leading-none">
                  Hi, my name is <span>Michael</span>
                </h1>
                <p className="md:text-[calc(8px+8*(100vw-568px)/200)]">
                  I am a Front-end developer
                </p>
                <section className="flex items-center gap-5">
                  <Image
                    loading="lazy"
                    src="http://placehold.it/100x100"
                    title="selfie Michael Koek"
                    alt="Michael Koek"
                    className="rounded-full border-4 border-slate-400 transition-transform ease-out hover:scale-110"
                    width={100}
                    height={100}
                  />
                  <nav className="flex flex-row gap-4">
                    <Link
                      href="https://www.linkedin.com/in/michael-koek/"
                      title="LinkedIn"
                      target="_blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#3e3e3e"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://github.com/michaelkoek"
                      title="Github"
                      target="_blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#3e3e3e"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://slides.com/michaelkoek"
                      title="Slides - See my presentations"
                      target="_blank"
                    >
                      <PresentationChartBarIcon className="h-6 w-6" />
                    </Link>
                  </nav>
                </section>
              </section>
            </section>
          </section>

          <section className="flex gap-5 p-4 md:p-12">
            <HomeInfoBlock
              title="Get in touch"
              btnLabel="Contact me"
              icon={() => <CodeBracketSquareIcon className="h-6 w-6" />}
              linkData={{
                href: "/about",
                title: "Learn what I offer",
              }}
            >
              With +10 years of experience, I tailor each project with a range
              of technologies
            </HomeInfoBlock>

            <HomeInfoBlock
              title="Latest project"
              btnLabel="See more"
              icon={() => <DocumentCheckIcon className="h-6 w-6" />}
              linkData={{
                href: "/cases",
                title: "See my latest projects",
              }}
            >
              Look at my work
            </HomeInfoBlock>
            <HomeInfoBlock
              title="Get in touch"
              btnLabel="Contact me"
              icon={() => <FingerPrintIcon className="h-6 w-6" />}
              linkData={{
                href: "/contact",
                title: "Let's get in touch",
              }}
            >
              Hey, let's connect and collaborate
            </HomeInfoBlock>
          </section>
        </article>

        <article className=" bg-stone-900">sdfds</article>
      </section>
    </main>
  );
}
