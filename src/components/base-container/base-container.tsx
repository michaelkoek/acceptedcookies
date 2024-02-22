import type { ReactNode } from "react";

interface IBaseContainer {
  children: ReactNode;
  className?: string;
}

export const BaseContainer = ({ children, className }: IBaseContainer) => {
  return (
    <section
      className={`relative mx-auto w-full max-w-[76rem] px-4 md:px-12 ${className}`}
    >
      {children}
    </section>
  );
};
