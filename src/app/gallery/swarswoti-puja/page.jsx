
import Image from "next/image";
import React from "react";



export default function page() {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-teal-100 via-blue-200 to-red-100">
      <div className="flex justify-center items-center text-4xl pt-8 ">
      Saraswoti Puja
      </div>
      <hr className="w-[220px] lg:w-[13%] border-black mx-auto mt-2" />
      <div className="flex p-2 sm:p-4 lg:w-[90%] mt-6 gap-2 lg:gap-5 xl:gap-8  place-content-center mx-auto">
        {/* 1st flex column */}
        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="h-28 w-28 sm:w-44 sm:h-48 lg:w-72 lg:h-72 2xl:w-[423px] 2xl:h-[434px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/1.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="w-28 sm:w-44 lg:w-72 lg:h-64 2xl:w-[423px] 2xl:h-[358px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/4.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-40 w-28 sm:w-44 sm:h-64 lg:w-72 lg:h-96 2xl:w-[423px] 2xl:h-[564px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/7.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="w-28 sm:w-44 lg:w-72 lg:h-44 2xl:w-[423px] 2xl:h-[264px] group " >
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/10.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        {/* 2nd flex column */}

        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="w-28 sm:w-44 lg:w-72 lg:h-60 2xl:w-[423px] 2xl:h-[358px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/2.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-24 w-28 sm:w-44 sm:h-36 lg:w-72 lg:h-64 2xl:w-[423px] 2xl:h-[358px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/5.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-36 sm:w-44 sm:h-64 lg:w-72 lg:h-96 2xl:w-[423px] 2xl:h-[546px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/8.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-24 sm:w-44 sm:h-36 lg:w-72 lg:h-56 2xl:w-[423px] 2xl:h-[358px] group ">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/11.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        {/* 3rd flex column */}

        <div className="flex flex-col gap-2 xl:gap-6 ">
          <div className="w-28 sm:w-44 lg:w-72 lg:h-60 2xl:w-[423px] 2xl:h-[358px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/3.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
        </div>
          <div className="h-40 w-28 sm:w-44 sm:h-60 md:lg:w-72 lg:h-96 2xl:w-[423px] 2xl:h-[568px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/6.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="w-28 sm:w-44 sm:h-40 lg:w-72 lg:h-64 2xl:w-[423px] 2xl:h-[334px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/9.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-24 sm:h-36 lg:w-72 lg:h-56 2xl:w-[423px] 2xl:h-[358px] group">
            <Image width={1440} height={1400} alt="swarswoti-puja"
              src="/assets/gallery/swarswoti-puja/12.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
