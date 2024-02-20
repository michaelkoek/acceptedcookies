import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface ILinkData {
  href: string;
  title: string;
}

interface IHomeInfoBlock {
  linkData: ILinkData;
  title: string;
  children: ReactNode;
  btnLabel?: string;
  icon?: () => ReactNode;
}

export const HomeInfoBlock = ({
  linkData,
  title,
  icon,
  children,
  btnLabel,
}: IHomeInfoBlock) => {
  return (
    <Link
      href={linkData.href}
      title={linkData.title}
      className="flex w-full cursor-pointer flex-col justify-between gap-3 rounded-xl bg-slate-200 p-4 transition-transform ease-in-out hover:scale-105 hover:shadow-md"
    >
      <h3 className="flex gap-2 font-bold">
        {title} {icon && icon()}
      </h3>
      <p className="text-gray-500">{children}</p>
      {btnLabel && (
        <button className="flex">
          {btnLabel}
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </Link>
  );
};
