"use client";
import { useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";
import { menuItems } from "./menu-items";
import type { IMenuItems } from "./menu-items";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface IMainMenu {
  isOpen?: boolean;
}

export const MainMenu = ({ isOpen }: IMainMenu) => {
  const [mainMenu, setMainMenu] = useState<IMenuItems[]>();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const currentPath = usePathname();

  useLayoutEffect(() => {
    setMainMenu(
      menuItems.flatMap((menuItem) =>
        currentPath === "/" && menuItem.url === "/" ? [] : menuItem,
      ),
    );
    setMenuIsOpen(!!isOpen);
  }, [currentPath]);

  const toggleMenuState = () => {
    if (isOpen) return;
    setMenuIsOpen((prevState) => !prevState);
  };

  const MenuTriggerIcon = useMemo(() => {
    if (isOpen) return Bars3Icon;
    return menuIsOpen ? XMarkIcon : Bars3Icon;
  }, [menuIsOpen]);

  console.log({ isOpen });

  return (
    <section className="flex items-center overflow-hidden rounded-full border bg-slate-300/70 p-1 backdrop-blur-xl">
      <motion.button
        className="rounded-full bg-white p-3"
        onClick={() => toggleMenuState()}
      >
        <MenuTriggerIcon className="h-6 w-6" />
      </motion.button>

      <motion.nav className="flex w-full">
        {mainMenu?.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.url}
            title={menuItem.title}
            className="px-4 capitalize hover:text-gray-600"
          >
            {menuItem.label}
          </Link>
        ))}
      </motion.nav>

      {/* <motion.div
        className="circle-button"
        whileHover={{ scale: 1.1 }}
        onClick={() => setMenuIsOpen((prevState) => !prevState)}
      >
        <motion.div
          className={`menu ${menuIsOpen ? "expanded" : ""}`}
          initial={{ scale: 0 }}
          animate={{ scale: menuIsOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/link1">Link 1</a>
          <a href="/link2">Link 2</a>
          <a href="/link3">Link 3</a>
        </motion.div>
      </motion.div> */}
    </section>
  );
};
