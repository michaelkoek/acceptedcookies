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
      h-[53px] 
      items-center 
      overflow-hidden 
      rounded-full 
      bg-slate-300/70
      p-3
      backdrop-blur-xl
    `}
      animate={{
        width: isExpanded ? "100%" : "53px",
        paddingRight: isExpanded ? "53px" : undefined,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
      }}
      initial={false}
    >
      <motion.nav
        className="flex w-full"
        animate={{
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
        }}
      >
        {mainMenu?.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.url}
            title={menuItem.title}
            className="px-2 capitalize hover:text-gray-600"
          >
            {menuItem.label}
          </Link>
        ))}
      </motion.nav>
      <motion.button
        title="toggle menu"
        aria-label="Menu"
        className="absolute right-0.5 rounded-full bg-white p-3 hover:animate-pulse"
        onClick={() => toggleMenuState()}
        animate={{
          rotate: isExpanded ? 360 : 0,
        }}
        initial={false}
      >
        <MenuTriggerIcon className="h-6 w-6" />
      </motion.button>
    </motion.section>
  );

  // return (
  //   <motion.section
  //     className={`
  //     flex
  //     items-center
  //     overflow-hidden
  //     rounded-full
  //     bg-slate-300/70
  //     p-1
  //     backdrop-blur-xl
  //   `}
  //     animate={{
  //       width: isExpanded ? "100%" : "56px",
  //     }}
  //     transition={{
  //       type: "tween",
  //       ease: "easeOut",
  //     }}
  //     initial={false}
  //   >
  //     <motion.button
  //       className="rounded-full bg-white p-3 hover:animate-pulse"
  //       onClick={() => toggleMenuState()}
  //       animate={{
  //         rotate: isExpanded ? 360 : 0,
  //       }}
  //       transition={{ delay: 0.2 }}
  //       initial={false}
  //     >
  //       <MenuTriggerIcon className="h-6 w-6" />
  //     </motion.button>

  //     <motion.nav className="flex w-full">
  //       {mainMenu?.map((menuItem) => (
  //         <Link
  //           key={menuItem.id}
  //           href={menuItem.url}
  //           title={menuItem.title}
  //           className="px-4 capitalize hover:text-gray-600"
  //         >
  //           {menuItem.label}
  //         </Link>
  //       ))}
  //     </motion.nav>
  //   </motion.section>
  // );
};
