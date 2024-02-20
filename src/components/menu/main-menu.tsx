"use client";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";
import { menuItems } from "./menu-items";
import type { IMenuItems } from "./menu-items";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface IMainMenu {
  isOpen?: boolean;
}

export const MainMenu = ({ isOpen }: IMainMenu) => {
  const [mainMenu, setMainMenu] = useState<IMenuItems[]>();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useLayoutEffect(() => {
    setMainMenu(menuItems);
    setMenuIsOpen(!!isOpen);
  }, []);

  const toggleMenuState = () => {
    if (isOpen) return;
    setMenuIsOpen((prevState) => !prevState);
  };

  const MenuTriggerIcon = useMemo(() => {
    if (isOpen) return Bars3Icon;
    return menuIsOpen ? XMarkIcon : Bars3Icon;
  }, [menuIsOpen]);

  return (
    <section className="flex items-center rounded-full border bg-slate-300/70 p-1 backdrop-blur-xl">
      <button
        className="rounded-full bg-white p-3"
        onClick={() => toggleMenuState()}
      >
        <MenuTriggerIcon className="h-6 w-6" />
      </button>
      <nav className="flex w-full">
        {mainMenu?.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.url}
            title={menuItem.title}
            className="px-4 capitalize"
          >
            {menuItem.label}
          </Link>
        ))}
      </nav>
    </section>
  );
};
