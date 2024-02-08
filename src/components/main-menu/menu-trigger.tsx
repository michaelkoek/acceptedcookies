"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const MenuTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDisplayMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    const bgMenuDisplay = isOpen ? "scale-[500] h-full w-full" : "h-2 w-2";

    return (
        <section className="relative">
            <button
                className="btn rounded-md flex flex-row gap-2 cursor-pointer z-20 relative"
                aria-label="menu button"
                onClick={() => toggleDisplayMenu()}
            >
                Menu <Bars3Icon className="h-6 w-6" />
            </button>
            <div
                className={`bg-slate-900 fixed h-full w-full rounded-full left-[50%] top-0 right-0 z-10 absolute transition-[transition,width,height] ease-in-out [transition:transform_0.35s,width_0.45s,height_0.45s] ${bgMenuDisplay}`}
            />
        </section>
    );
};
