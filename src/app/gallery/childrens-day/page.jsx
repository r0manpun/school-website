"use client";
import React, { useState } from "react";
import Image from "next/image";

const img = [
  "/assets/gallery/childrens-day/1.jpg",
  "/assets/gallery/childrens-day/2.jpg",
  "/assets/gallery/childrens-day/3.jpg",
  "/assets/gallery/childrens-day/4.jpg",
  "/assets/gallery/childrens-day/5.jpg",
  "/assets/gallery/childrens-day/6.jpg",
  "/assets/gallery/childrens-day/7.jpg",
  "/assets/gallery/childrens-day/8.jpg",
  "/assets/gallery/childrens-day/9.jpg",
  "/assets/gallery/childrens-day/10.jpg",
  "/assets/gallery/childrens-day/11.jpg",
  "/assets/gallery/childrens-day/12.jpg",
  "/assets/gallery/childrens-day/13.jpg",
  "/assets/gallery/childrens-day/14.jpg",
  "/assets/gallery/childrens-day/15.jpg",
];

export default function Page() {
  const [page, setPage] = useState(1);

  const recordsPerPage = 9;
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = img.slice(firstIndex, lastIndex);

  const npage = Math.ceil(img.length / recordsPerPage);

  // const numbers: number[] =[...Array(npage).keys()].slice(1);

  const numbers = Array.from(
    { length: npage },
    (_, i) => i+1
  ).slice(0);

  const content = (
    <div className=" max-w-[1530px] mx-auto flex flex-wrap place-content-center gap-10 mt-8 group">
      {records.map((path) => (
        <div key={path} className="w-[350px] h-[270px] ">
          <Image
            src={path}
            width={1400}
            height={1300}
            alt="children's-day"
            className="w-full h-full object-cover cursor-pointer group-hover:backdrop-grayscale bg-white  hover:backdrop-filter-none"
          />
        
        </div>
      ))}
    </div>
  );

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  function ChangePage(id) {
    setPage(id);
  }

  return (
    <div className="w-full h-full bg-gradient-to-tr from-teal-100 via-blue-200 to-red-100 pb-6">
      <div className="flex justify-center items-center text-4xl pt-8 ">
        Children&apos;s Day
      </div>
      <hr className="w-[220px] lg:w-[13%] border-black mx-auto mt-2" />
      {content}
      <nav className="mt-10 flex justify-center gap-4 ">
        <button onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        {numbers.map((n) => (
          <div key={n} className={`${page === n ? "active " : ""}`}>
            <a href="#" className="" onClick={() => ChangePage(n)}>
              {n}
            </a>
          </div>
        ))}
        <button onClick={nextPage} disabled={page === npage}>
          Next Page
        </button>
      </nav>
    </div>
  );
}