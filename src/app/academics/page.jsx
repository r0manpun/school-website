import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const sans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function page() {
  return (
    <>
      <div className=" max-w-[1540px] mx-auto h-full">
        <Image
          width={1400}
          height={1300}
          src="/assets/academics/h.jpg"
          className="object-cover min-h-full w-full p-5"
          alt="academics1"
        />

        <h1 className="text-center mt-8 text-xl lg:text-3xl font-extrabold">
          &quot; Our Dedicated Teaching Staff &quot;
        </h1>
        <p className=" mx-auto mt-4 text-sm sm:text-base xl:text-xl px-5 font-medium">
          Our dedicated teachers go above and beyond to help students thrive.
          They provide personalized attention, create a supportive classroom
          environment, and offer guidance and mentorship. With their expertise
          and commitment, our teachers empower students to reach their full
          potential and cultivate a love for learning. Beyond delivering
          curriculum content, our teachers act as mentors, guiding students on
          their educational journey. They offer guidance, encouragement, and
          constructive feedback, empowering students to develop critical
          thinking skills and become lifelong learners. They inspire curiosity,
          ignite a passion for knowledge, and instill confidence in their
          students abilities.
        </p>
        <h1 className="text-center mt-8 text-xl xl:text-3xl font-extrabold">
          Courses Offered in RAH
        </h1>
        <hr className="w-[220px] lg:w-[9%] border-[#ea9443] mx-auto mt-4" />
        <div className="grid grid-cols-2 mx-auto max-w-[1560px] gap-6 px-3 lg:px-6">
          <div className="">
            <h1 className="text-center text-sm md:text-lg xl:text-3xl font-bold my-2 md:my-5">
              10+2 Program (Management)
            </h1>
            <Image
              width={1440}
              height={1400}
              src="/assets/academics/group.jpg"
              className=" rounded-2xl  2xl:h-[680px]"
              alt="students"
            />
          </div>
          <div className="lg:px-10 my-auto xl:h-[480px]">
            <h1 className="text-sm md:text-lg xl:text-3xl md:px-5 font-bold">
              Courses
            </h1>
            <Image
              width={1000}
              height={900}
              src="/assets/academics/sub.png"
              className="p-2 md:p-5 2xl:h-[400px] "
              alt="subjects"
            />
            <h1 className="md:my-4 text-sm md:text-lg xl:text-3xl font-bold">
              Schedule
            </h1>
            <p className="text-[12px] md:text-base xl:text-2xl">
              The classes run in the morning shift.
            </p>
          </div>
        </div>
        <h1 className="text-center mt-8 xl:text-3xl font-extrabold">
          School Uniforms
        </h1>
        <hr className="w-24 lg:w-[9%] border-[#ea9443] mx-auto mt-2" />
        <div className="flex flex-col-reverse sm:flex-row px-5 mx-auto mt-4 ">
          <p className="pt-2 md:my-auto h-full text-[12px] md:text-sm lg:text-xl xl:text-2xl">
            Note:
            <br />
            1. We have distinctive colored sports dress for different four
            houses.
            <br />
            2. Coat to be used from class 6 <br />
            3. A set of track suit and T-shirt, color and design prescribed by
            school, should be used from Nursery to Ten.
          </p>
          <Image
            width={2000}
            height={1400}
            src="/assets/academics/items.png"
            className="h-52 w-96 md:w-3/4 md:h-fit mx-auto"
            alt="scool-uniforms-info"
          />
        </div>
        <div className=" p-4 w-[80%] md:w-[680px] lg:w-[60%] mx-auto">
          <Image
            width={1600}
            height={1800}
            src="/assets/academics/p.png"
            className="object-cover w-full xl:h-[500px]"
            alt="academics"
          />
        </div>
        <div className={sans.className}>

          <h1 className="text-center xl:my-10 xl:text-3xl font-extrabold">
            &quot;Voices of Success: Reflections from Our Accomplished
            Alumni&quot;
          </h1>
          <div className="flex justify-between px-4 mt-4 mx-auto lg:h-72 pb-8">
            <div className="flex w-[44vw] h-[15vh] sm:w-[47vw] sm:h-[20vh] md:h-[26vh] lg:h-auto 2xl:w-[680px] justify-around items-center bg-sky-100">
              <div className="flex flex-col items-center">
              <Image width={514} height={514} src="/assets/academics/icon.png" className=" w-[10vw] md:w-[12vw] lg:w-[14vw] xl:w-48 xl:h-48" alt="teacher"/>
              <h1 className="text-[10px] sm:text-sm lg:text-xl">Name</h1>
              <h1 className="text-[10px] sm:text-sm lg:text-xl">Profession</h1>
              </div>
              <p className="w-[55%] h-[75%] bg-[#D9D9D9] "></p>
            </div>
            <div className="flex w-[44vw] h-[15vh] sm:w-[47vw] sm:h-[20vh] md:h-[26vh] lg:h-auto 2xl:w-[680px] justify-around items-center bg-sky-100">
              <div className="flex flex-col items-center">
              <Image width={514} height={514} src="/assets/academics/icon.png" className=" w-[10vw] md:w-[12vw] lg:w-[14vw] xl:w-48 xl:h-48" alt="teacher"/>
              <h1 className="text-[10px] sm:text-sm lg:text-xl">Name</h1>
              <h1 className="text-[10px] sm:text-sm lg:text-xl">Profession</h1>
              </div>
              <p className="w-[55%] h-[75%] bg-[#D9D9D9] "></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
