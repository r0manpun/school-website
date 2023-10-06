"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={playfair.className}>
      <nav className=" w-full h-10 md:h-14 lg:h-16 bg-white flex  flex-auto flex-shrink-0 flex-grow justify-start gap-6 items-center px-12 drop-shadow-lg ">
        {navItem.map((item, index) => (
          <div
            key={index}
            className={`hidden md:flex w-full xl:text-lg 2xl:text-2xl ${
              index === navItem.length - 1 ? "" : "border-r-2 "
            } hover:text-[#1091C8]`}
          >
            <Link
              href={`/${item.slug}`}
              className="uppercase flex justify-around pr-2 xl:pr-8 active:text-[#1091C8]"
              passHref
            >
              {item.title}
            </Link>
          </div>
        ))}
        {/*Mobile Button */}
        <button className="block ml-auto md:hidden " onClick={handleToggle}>
          <MdOutlineMenu size={25} />
        </button>
        <div
          className={
            isMenuOpen
              ? "fixed flex md:hidden top-10 left-0 right-0 bottom-0 justify-center items-start w-full bg-blue-700 h-screen ease-in duration-500 z-10"
              : "absolute flex md:hidden top-10 left-[-100%] right-0 bottom-0 justify-center items-start w-full bg-black h-screen ease-in duration-500 z-10"
          }
        >
          <ul>
            {navItem.map(({ title, slug }, index) => (
              <li
                key={index}
                className="p-4 text-4xl uppercase text-white hover:text-[#1091C8]"
              >
                <Link
                  href={`/${slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className=""
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

const navItem = [
  {
    title: "home",
    slug: "",
  },
  {
    title: "news/events",
    slug: "news&events",
  },
  {
    title: "academics",
    slug: "academics",
  },
  {
    title: "gallery",
    slug: "gallery",
  },
  {
    title: "about us",
    slug: "about-us",
  },
  {
    title: "conact",
    slug: "contact",
  },
  {
    title: "admission",
    slug: "admission",
  },
];