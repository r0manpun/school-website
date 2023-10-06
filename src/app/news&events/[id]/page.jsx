import Image from "next/image";
import React from "react";

const data = {
  img: [
    "/assets/events/a.jpg",
    "/assets/events/b.jpg",
    "/assets/events/c.jpg",
    "/assets/events/d.jpg",
  ],
};

export default function page() {
  return (
    <>
      <div className="xl:w-[1440px] mx-auto">
        <div className="flex justify-center items-center gap-3 text-lg xl:text-3xl mt-2 xl:mt-8 font-semibold ">
          &quot;Sharing Smiles&quot;
        </div>
        <p className="w-[90%] mx-auto text-sm md:text-base 2xl:text-xl mt-2 xl:mt-5 font-sans">
          Our school team recently had the privilege of visiting the nearby old
          age home. Through our collective efforts, we aimed to bring smiles,
          comfort, and nourishment to these esteemed members of our community.
          It was a heartwarming experience to witness their faces light up with
          gratitude and delight as they received these thoughtful provisions. We
          made sure to engage in meaningful conversations, lending an empathetic
          ear and offering companionship to brighten their day. Through our
          small acts of kindness and generosity, we aimed to spread joy,
          nourishment, and companionship among the elderly residents. It is our
          hope that this initiative serves as an inspiration for others to make
          a difference in the lives of those who have enriched our community
          with their wisdom and experiences.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 xl:gap-x-6 xl:gap-y-10 place-content-center sm:w-10/12 max-w-screen-2xl mx-auto mt-8">
        {data.img.map((url) => (
          <Image
            width={1500}
            height={1000}
            src={url}
            alt="events"
            key={url}
            className="object-cover w-36 h-32 md:w-52 md:h-44 lg:w-72 lg:h-72 2xl:w-96 "
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 xl:gap-3 text-[10px] xl:text-2xl py-5 xl:py-10">
        <hr className=" border-black w-10 xl:w-20" />
        27th Flagun, 2079
        <hr className="border-black w-10 xl:w-20" />
      </div>
    </>
  );
}
