"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
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
            className={`hidden md:flex w-full xl:text-2xl 2xl:text-3xl ${
              index === navItem.length - 1 ? "" : "border-r-2 "
            } hover:text-[#1091C8]`}
          >
            <div className="uppercase flex justify-around pr-2 xl:pr-8 active:text-[#1091C8]">
              <Link href={`/${item.slug}`}>{item.title}</Link>
            </div>
          </div>
        ))}
        {/*Mobile Button */}
        <button className="block ml-auto md:hidden " onClick={handleToggle}>
          {!isMenuOpen ? <MdOutlineMenu size={25}/>:<MdOutlineClose size={25}/>}
        </button>
        <ul
          className={
            isMenuOpen
              ? "fixed flex flex-col md:hidden justify-start items-start w-full h-[100vh] left-0 right-0 top-10 pt-10 pr-0 pb-0 pl-5 bg-cyan-500 ease-in duration-700 "
              : "fixed flex flex-col md:hidden top-10 left-[-100%] right-0 justify-start items-start w-full  h-[100vh] pt-10 pr-0 pb-0 pl-5 bg-black ease-in duration-700 "
          }
        >
          {navItem.map(({ title, slug }, index) => (
            <li
              key={index}
              className="text-2xl uppercase  text-white hover:text-[#1091C8]"
            >
              <Link href={`/${slug}`} onClick={() => setIsMenuOpen(false)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
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
];
