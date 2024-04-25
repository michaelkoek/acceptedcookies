"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface IMainMenu {
  isOpen?: boolean;
  children?: ReactNode;
}

export const MainMenu = ({ isOpen = false, children }: IMainMenu) => {
  return (
    <motion.article
      className={`
        fixed 
        right-0 
        top-0 
        z-10
        h-full
        bg-black
        ${
          isOpen
            ? `before:fixed 
        before:left-0 
        before:right-0 
        before:block 
        before:h-full 
        before:w-full 
        before:bg-stone-600 
        before:opacity-50`
            : ""
        }
  
        `}
      animate={{
        width: isOpen ? "70vw" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      initial={false}
    >
      <motion.nav
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="relative flex h-full flex-col items-end justify-center gap-4"
      >
        {children}
      </motion.nav>
    </motion.article>
  );
};
