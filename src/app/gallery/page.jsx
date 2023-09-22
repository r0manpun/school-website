import Image from "next/image";
import Link from "next/link";
import React from "react";


const galleryData = [
  {
    title: "All SLC Batch",
    img: "/assets/values.jpg",
    slug: "/gallery/all-slc-batch",
  },
  {
    title: "Children's Day",
    img: "/assets/gallery.jpg",
    slug: "/gallery/childrens-day",
  },
  {
    title: "Dashain Celebration",
    img: "/assets/gallery/festival.jpg",
    slug: "/gallery/dashain-celebration",
  },
  {
    title: "Distributing Dustbins",
    img: "/assets/btc1.jpg",
    slug: "/gallery/distributing-dustbins",
  },
  {
    title: "Environment Day",
    img: "/assets/gallery/enviro.jpg",
    slug: "/gallery/environment-day",
  },
  {
    title: "Parent's Day",
    img: "/assets/gallery/parentsday/p5.jpg",
    slug: "/gallery/parents-day",
  },
  {
    title: "Rangoli Competition",
    img: "/assets/gallery/rangoli.jpg",
    slug: "/gallery/rangoli-competition",
  },
  {
    title: "Swarswoti Puja",
    img: "/assets/gallery/puja.jpg",
    slug: "/gallery/swarswoti-puja",
  },
  {
    title: "Sports Meet",
    img: "/assets/gallery/sports.jpg",
    slug: "/gallery/sports-meet",
  },
];

export default function page() {
  return (
    <div className="bg-gradient-to-tr from-cyan-100 via-sky-100 to-pink-200 ">
      <div className="flex justify-center items-center gap-2 xl:gap-3 md:text-xl lg:text-2xl xl:text-5xl pt-7 ">
        <hr className=" border-black w-8 xl:w-20" />
        Everlasting Memories:
        <br className="xl:hidden" /> Explore Our School Gallery
        <hr className="border-black w-8 xl:w-20" />
      </div>
      <h1 className="lg:text-base xl:text-2xl 2xl:text-5xl text-center mt-2 xl:mt-4 font-medium">
        Where
      </h1>
      <h1 className="lg:text-base xl:text-2xl 2xl:text-5xl text-center xl:mt-2 font-medium">
        &quot;Every picture tells a story&quot;
      </h1>

      {/* GALLERY */}

      <div className="w-full md:p-10 lg:p-14 mx-auto mt-3 xl:mt-20 flex flex-wrap gap-4 lg:gap-10 2xl:gap-16 place-content-center pb-6">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="grid place-items-center justify-center lg:relative  transition duration-300 hover:scale-105"
          >
            <Link href={item.slug}>
              <Image
                width={1440}
                height={1400}
                alt="rangoli-competition"
                src={item.img}
                className="w-36 h-24 sm:w-[160px] sm:h-[120px] lg:w-72 lg:h-60 md:w-[250px] md:h-[200px] xl:w-96 xl:h-80 2xl:w-[400px] 2xl:h-[350px] object-cover "
              />
              </Link>
              <h1 className="lg:absolute flex content-center justify-center lg:text-white text-[3vw]">
                {item.title}
              </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
