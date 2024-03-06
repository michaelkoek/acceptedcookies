import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface IButton {
  children: ReactNode;
  title: string;
}

export const btnStyle =
  "rounded-full bg-gray-600 p-4 text-gray-300 transition-colors ease-out hover:bg-gray-800 w-full text-center";

export const Button = ({ children, title }: IButton) => {
  return (
    <button title={title} className={btnStyle}>
      {children}
    </button>
  );
};
