"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CodeBracketSquareIcon,
  FingerPrintIcon,
  DocumentCheckIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { HomeInfoBlock } from "@/components/home-info-block";
import { MainMenu } from "@/components/menu";
import { LogoDisplayHeader } from "@/components/logo-display";
import { useEffect, useMemo, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { menuItems, type IMenuItems } from "@/components/menu/menu-items";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mainMenu, setMainMenu] = useState<IMenuItems[]>();
  const currentPath = usePathname();

  const MenuTriggerIcon = useMemo(
    () => (isExpanded ? XMarkIcon : Bars3Icon),
    [isExpanded],
  );

  useEffect(() => {
    setMainMenu(menuItems);
  }, []);

  const toggleMenuState = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <>
      <header className="fixed top-0 z-20 flex w-full flex-wrap justify-between p-8">
        <LogoDisplayHeader />
        <button
          title="toggle menu"
          aria-label="Menu"
          className="flex items-center"
          onClick={() => toggleMenuState()}
        >
          <motion.div
            animate={{
              rotate: isExpanded ? 360 : 0,
            }}
            initial={false}
          >
            <MenuTriggerIcon className="color-white h-6 w-6" />
          </motion.div>
          <span>Menu</span>
        </button>
      </header>

      <MainMenu isOpen={isExpanded}>
        {mainMenu?.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.url}
            title={menuItem.title}
            className="px-4 text-[200%] capitalize text-slate-100 hover:text-slate-500"
          >
            {menuItem.label}
          </Link>
        ))}
      </MainMenu>

      <main className="mt-[145px] h-lvh md:mt-auto">
        <section className="grid h-full md:grid-cols-3">
          <article className="col-span-1 flex flex-col justify-between md:col-span-2 ">
            <section className="flex h-full items-center justify-evenly">
              <section className="px-4 md:px-12">
                <section className="flex flex-col items-center justify-evenly gap-4 md:items-start">
                  <h1 className="text-3xl md:text-[calc(16px+16*(100vw-568px)/200)] md:leading-none">
                    Hi, my name is <span>Michael</span>
                  </h1>
                  <p className="md:text-[calc(8px+8*(100vw-568px)/200)]">
                    I am a Front-end developer
                  </p>
                  <section className="flex flex-col items-center gap-5 md:flex-row">
                    <Image
                      loading="lazy"
                      src="http://placehold.it/100x100"
                      title="selfie Michael Koek"
                      alt="Michael Koek"
                      className="rounded-full border-4 border-slate-400 transition-transform ease-out hover:scale-110 hover:shadow-md"
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

            <section className="flex flex-col gap-5 p-4 md:flex-row md:p-12">
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
                Hey, lets connect and collaborate. See my availability
              </HomeInfoBlock>
            </section>
          </article>

          <article className="hidden w-full bg-stone-900 md:block">
            <Image
              loading="lazy"
              title="Made with pencil and markers"
              src="/images/doodle.jpg"
              width={1000}
              height={1000}
              alt="Selfmade doodle"
              className="h-screen object-cover opacity-40 blur-sm"
            />
          </article>
        </section>
      </main>
    </>
  );
}
