"use client";
import Link from "next/link";
import { MenuTrigger } from "./menu-trigger";

interface IMainMenu {
    menuItems: {
        id: number;
        label: string;
        title: string;
        url: string;
    }[];
}

export const Mainmenu = ({ menuItems }: IMainMenu) => {
    return (
        <section>
            <MenuTrigger />
            <section className="container">
                <nav>
                    {menuItems.map((menuItem) => (
                        <Link
                            key={menuItem.id}
                            href={menuItem.url}
                            title={menuItem.title}
                            className="capitalize m-2"
                        >
                            {menuItem.label}
                        </Link>
                    ))}
                </nav>
            </section>
        </section>
    );
};
