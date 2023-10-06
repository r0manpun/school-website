import React from "react";
import Image from "next/image";
import Link from "next/link";

const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });
    if(!res.ok){
      throw new Error('failed to fetch the notice')
    }
    return res.json()
  } catch (error) {
    console.log("error loading notice",error)
  }
};

export default function News() {

  return (
    
    <div className={`max-w-[1543px] mx-auto bg-slate-200`}>
      <div className="flex justify-center items-center gap-3 text-base xl:text-3xl pt-10 ">
        <hr className=" border-black w-8 xl:w-20" />
        News And Events
        <hr className="border-black w-8 xl:w-20" />
      </div>
      <div className=" grid grid-cols-2 xl:grid-cols-3 w-full gap-x-4 justify-evenly gap-y-5 xl:gap-y-14 mx-auto mt-6 px-3 md:px-5 pb-10 ">
        {data.map(({ img, title, desc }, index) => (
          <div
            className=" h-56 sm:h-80 sm:w-80 md:w-[330px] md:h-96 lg:h-[495px] lg:w-[495px] xl:w-11/12 xl:h-[555px] lg:drop-shadow-lg bg-white mx-auto"
            key={index}
          >
            <div className=" w-full h-2/3 lg:h-[75%] xl:h-2/3">
              <Image
                src={img}
                width={1200}
                height={900}
                alt="events"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-1 xl:p-5">
              <h1 className="text-center lg:text-base text-[12px] xl:text-[22px] line-clamp-1">
                &quot;{title}&quot;
              </h1>
              <p className="text-[10px] md:text-base xl:text-lg xl:mt-3 line-clamp-2">
                {desc}
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
    </div>
  );
}

const data = [
  {
    title: "All-School Leaders and House Representatives",
    desc: "We extend our warmest congratulations to all the dedicated individuals who have been appointed.....",
    img: "/assets/home/home3.jpg",
  },
  {
    title: "MoU Signed",
    desc: "Nanjing University of Aeronautics and Astronautics (NUAA) and Rainbow Academic Homes .....",
    img: "/assets/home/home2.jpg",
  },
  {
    title: "Nursery to UKG Parents Orentation Programme",
    desc: "Experience the highlights of our highly successful Parents Orientation Program.....",
    img: "/assets/home/home1.jpg",
  },
  {
    title: "27th Asian Cities Taekwondo Championship",
    desc: "We are proud to announce that Arik Rana, a talented Grade 4 student, achieved the remarkable feat of.....",
    img: "/assets/btc6.jpg",
  },
  {
    title: "1st Runner-up in Girls Volleyball Tournament",
    desc: "We are thrilled to announce our talented girls' volleyball team for their outstanding achievement.....",
    img: "/assets/home/home1.jpg",
  },
];
