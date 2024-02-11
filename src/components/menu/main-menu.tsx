"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";
import { menuItems } from "./menu-items";
import type { IMenuItems } from "./menu-items";

export const Mainmenu = () => {
  const [mainMenu, setMainMenu] = useState<IMenuItems[]>();

  useEffect(() => {
    setMainMenu(menuItems);
  }, []);

  return (
    <section>
      <MenuTrigger />
      <section className="container">
        <nav>
          {mainMenu?.map((menuItem) => (
            <Link
              key={menuItem.id}
              href={menuItem.url}
              title={menuItem.title}
              className="m-2 capitalize"
            >
              {menuItem.label}
            </Link>
          ))}
        </nav>
      </section>
    </section>
  );
};
