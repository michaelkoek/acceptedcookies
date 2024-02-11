"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { menuItems } from "../menu/menu-items";
import type { IMenuItems } from "../menu/menu-items";

export const FooterMenu = () => {
  const [footerMenu, setFooterMenu] = useState<IMenuItems[]>();

  useEffect(() => {
    setFooterMenu(menuItems);
  }, []);

  return (
    <nav className="flex flex-col gap-2">
      {footerMenu?.map((menuItem) => (
        <Link
          key={menuItem.id}
          href={menuItem.url}
          title={menuItem.title}
          className="capitalize"
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
};
