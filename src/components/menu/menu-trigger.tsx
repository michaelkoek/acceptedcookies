"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const MenuTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisplayMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const bgMenuDisplay = isOpen ? "visible" : "";
  const menuLine = "bg-black h-1 block";
  const activeMenuLine = "translate-y-[-2px] rotate-45";
  console.log({ isOpen });

  return (
    <section className="relative">
      <button
        className="btn relative z-20 flex cursor-pointer flex-row gap-2 rounded-md"
        aria-label="menu button"
        onClick={() => toggleDisplayMenu()}
      >
        Menu <Bars3Icon className="h-6 w-6" />
      </button>

      <div
        className={`


        `}
      ></div>
    </section>
  );
};
