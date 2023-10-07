"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getEventsData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/news", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch the notice");
    }
    return res.json();
  } catch (error) {
    console.log("error loading notice", error);
  }
};

export const GetEvents = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNewsData() {
      const {newsData} = await getNews();
      setNews(newsData.reverse()); // Reverse the order to display the latest news first
    }
    getNewsData();
  }, []);
  return (
    <>
      <div className=" grid grid-cols-2 xl:grid-cols-3 w-full gap-x-4 justify-evenly gap-y-5 xl:gap-y-14 mx-auto mt-6 px-3 md:px-5 pb-10 ">
        {news.map((item, index) => (
          <div
            className=" h-56 sm:h-80 sm:w-80 md:w-[330px] md:h-96 lg:h-[495px] lg:w-[495px] xl:w-11/12 xl:h-[555px] lg:drop-shadow-lg bg-white mx-auto"
            key={index}
          >
            <div className=" w-full h-2/3 lg:h-[75%] xl:h-2/3">
              <Image
                src={item.imageUrl}
                width={1200}
                height={900}
                alt="events"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-1 xl:p-5">
              <h1 className="text-center lg:text-base text-[12px] xl:text-[22px] line-clamp-1">
                &quot;{item.title}&quot;
              </h1>
              <p className="text-[10px] md:text-base xl:text-lg xl:mt-3 line-clamp-2">
                {item.content}
              </p>
              <div className="flex w-full justify-center sm:mt-2 ">
                <div className="flex justify-center items-center hover:border hover:rounded-[30px] text-[9px] sm:text-sm md:text-base sm:w-24 md:w-28 sm:h-11 xl:w-32 h-6 xl:h-14 2xl:mx-auto hover:bg-[#19E3E3] hover:text-white">
                  <Link href="/news&events/id">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
