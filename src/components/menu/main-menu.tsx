"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { menuItems } from "./menu-items";
import type { IMenuItems } from "./menu-items";

interface IMainMenu {
  isOpen?: boolean;
}

export const MainMenu = ({ isOpen }: IMainMenu) => {
  const [mainMenu, setMainMenu] = useState<IMenuItems[]>();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setMainMenu(
      menuItems.flatMap((menuItem) =>
        currentPath === "/" && menuItem.url === "/" ? [] : menuItem,
      ),
    );
    setIsExpanded(!!isOpen);
  }, []);

  const MenuTriggerIcon = useMemo(() => {
    if (isOpen) return Bars3Icon;
    return isExpanded ? XMarkIcon : Bars3Icon;
  }, [isExpanded, isOpen]);

  const toggleMenuState = () => {
    if (isOpen) return;
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <motion.section
      className={`
      flex 
      items-center 
      overflow-hidden 
      rounded-full 
      bg-slate-300/70 
      p-1 
      backdrop-blur-xl  
    `}
      animate={{
        width: isExpanded ? "100%" : "56px",
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
      }}
      initial={false}
    >
      <motion.button
        className="rounded-full bg-white p-3 hover:animate-pulse"
        onClick={() => toggleMenuState()}
        animate={{
          rotate: isExpanded ? 360 : 0,
        }}
        transition={{ delay: 0.2 }}
        initial={false}
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
    </motion.section>
  );
};
