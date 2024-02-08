import type { ReactNode } from "react";

interface IBaseContainer {
    children: ReactNode;
}

export const BaseContainer = ({ children }: IBaseContainer) => {
    return (
        <section className="mx-auto px-4 md:px-12 max-w-[76rem]">
            {children}
        </section>
    );
};
