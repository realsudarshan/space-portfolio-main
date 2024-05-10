import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg bg-[#03001427] backdrop-blur-md z-50">
    <div className="max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 flex items-center justify-between">
      <Link href="#about-me" passHref>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className="font-bold text-gray-300 hidden md:block">
            Sudarshan Dhakal
          </div>
        </div>
      </Link>

      <div className="hidden md:flex flex-grow justify-center space-x-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.link}
            passHref
          >
            <a className="text-gray-200 hover:text-[rgb(112,66,248)] transition">
              {link.title}
            </a>
          </Link>
        ))}

        <Link
          href={LINKS.sourceCode}
          target="_blank"
          rel="noreferrer noopener"
          passHref
        >
          <a className="text-gray-200 hover:text-[rgb(112,66,248)] transition">Source Code</a>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="md:hidden flex items-center space-x-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <div className="md:hidden">
          {/* Insert your hamburger menu icon component here */}
        </div>
      </div>
        <div className="flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
