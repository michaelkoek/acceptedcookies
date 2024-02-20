import Image from "next/image";
import Link from "next/link";

export const LogoDisplayHeader = () => (
  <Link href="/" className="group inline-block ">
    <Image
      alt="Accepted Cookies logo"
      title="Accepted Cookies - front-end development"
      src="/images/accepted-cookies-logo.png"
      width={72}
      height={72}
    />
    <span className="block transform text-sm opacity-0 transition-[transform,opacity] group-hover:translate-y-2 group-hover:opacity-100">
      Accepted <strong>Cookies</strong>
    </span>
  </Link>
);
