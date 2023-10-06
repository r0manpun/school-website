"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const GetNotices = () => {
  const [page, setPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      setNoticesPerPage(screenSize > 1530 ? 6 : 5);
    }
    handleResize(); // Initial call to set the initial value
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const lastIndex = page * noticesPerPage;
  const firstIndex = lastIndex - noticesPerPage;
  const notices = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / noticesPerPage);
  const numbers = Array.from(
    { length: npage },
    (_, i) => i + 1
  ).slice(0);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  function ChangePage(id) {
    setPage(id);
  }
  return (
    <div>
      <div className="bg-[#fd7900] flex justify-center items-center rounded-[12px_12px_0px_0px] w-full h-[50px] lg:h-14 2xl:h-[78px] text-[#ffffff] text-xl xl:text-2xl 2xl:text-3xl">
        Important Notices
      </div>
      <ul>
        {notices.map(([title, url, desc], index) => (
          <li key={index} className="flex justify-center p-2 ">
            <Link
              className="flex flex-col rounded-xl w-[95%] lg:w-11/12 h-16 xl:h-20 bg-zinc-100 shadow-md "
              href={url}
            >
              <div className="ml-3 xl:text-xl 2xl:text-lg mt-2 font-extrabold">
                {title}
                <p className="text-base xl:text-xl font-normal">{desc}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-center pt-2 md:pt-3">
        <button className="border" onClick={prevPage} disabled={page === 1}>
          ⬅️
        </button>
        {numbers.map((n) => (
          <div key={n} className={`${page === n ? "active " : ""} border w-6`}>
            <a
              href="#"
              onClick={() => ChangePage(n)}
              className="flex justify-center"
            >
              {n}
            </a>
          </div>
        ))}
        <button className="border" onClick={nextPage} disabled={page === npage}>
          ➡️
        </button>
      </div>
    </div>
  );
};

const data = [
    ["HOME", "/", "hello"],
    ["NEWS/EVENTS", "/events", "hello"],
    ["ACADEMICS", "/academics", "hello"],
    ["GALLERY", "/gallery", "hello"],
    ["ABOUT US", "/about", "hello"],
    ["CONTACT", "/contact", "hello"],
    ["CONTACT", "/contact", "hello"],
  ];