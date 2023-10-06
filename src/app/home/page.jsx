
import React from "react";
import Image from "next/image";
import {
  MdOutlineScience,
  MdRestaurant,
  MdOutlineDirectionsBusFilled as Bus,
  MdImportContacts,
  MdOutlineAccountBalance,
  MdOutlineDesktopWindows,
  MdOutlineSchool,
  MdSportsSoccer,
} from "react-icons/md";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Slider from "../../components/Slider";
import Link from "next/link";
import DialogBox from "./DialogBox";
import Number from "@/components/AnimatedNumber";
import { GetNotices } from "./GetNotices";

// const noto = Noto_Serif_SC({
//   subsets: ["latin"],
//   weight: ["900"],
// });

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export default function Home() {
  return (
    <>
      <DialogBox/>
      {/* Image For Front Page */}
      <Image
        width={1440}
        height={1400}
        src="/assets/DJI_0905.jpg"
        className="w-full object-cover p-2"
        alt="homepage"
      />
      {/* Welcome  */}
      <div className="h-full sm:flex justify-around mt-4 p-6 xl:p-10 2xl:p-12">
        <div className="lg:flex sm:w-4/6 lg:w-4/5 2xl:w-10/12">
          <section className="flex flex-col items-center xl:w-3/5 2xl:w-2/4 p-2 xl:p-0">
            <div className="border-[1px] w-px h-10 xl:h-16 bg-[#BAAEAE]"></div>
            <h1 className="mt-3 2xl:mt-4 font-medium text-[#797979] text-base xl:text-xl  2xl:text-3xl">
              WELCOME
            </h1>
            <h1 className="text-xl xl:text-3xl 2xl:text-4xl text-[#FD7900] font-normal text-center mt-2 xl:mt-6">
              WHAT MAKES US <br />
              UNIQUE?
            </h1>
            <br />
            <p className="mx-auto text-sm xl:text-base 2xl:text-xl text-[#4B4747] text-center sm:px-6 lg:p-0 2xl:p-2">
              Rainbow Academic Homes is renowned for academic excellence. What
              sets us apart is our unwavering dedication to provide a
              distinctive and inclusive educational experience. Our passionate
              educators are committed to creating innovative learning
              opportunities that inspire creativity, critical thinking, and a
              lifelong passion for learning.
              <br />
              <br />
              Emphasizing character development, we instill values of empathy,
              integrity, and resilience, empowering our students to become
              compassionate leaders and global citizens.
            </p>
          </section>
          <Image
            className=" object-cover my-auto w-[90%] sm:h-[300px] lg:w-1/2 lg:h-3/4 2xl:w-1/2 mx-auto p-3 2xl:p-4 "
            src="/assets/welcome.jpg"
            width={1200}
            height={1100}
            alt="welcome"
          />
        </div>
        <aside className=" rounded-xl border border-black mx-auto w-11/12 sm:w-2/5 lg:w-2/6 h-[510px] xl:h-[600px] 2xl:h-[726px] my-auto lg:mt-4">
          <GetNotices />
        </aside>
      </div>
      <div className={playfair.className}>
        <div className="2xl:w-11/12">
          <div className="text-center text-[#FD7900] lg:-mt-16 xl:-mt-20 lg:text-2xl xl:text-4xl">
            The Facilities we provide
          </div>
          <hr className="mt-6 border-orange-300 mx-auto w-36 lg:w-[208px]" />
          <div className="sm:flex w-full mt-1 md:mt-4">
            <div className="mx-auto p-3 w-80 h-60 lg:pl-10 mt-[5%] sm:h-80 sm:w-2/4 lg:h-96 xl:h-[520px] 2xl:w-[1485px] 2xl:h-[530px]">
              <Slider slides={slides} />
            </div>
            <div className="p-4 md:p-8 xl:h-[424px] sm:w-[50%] 2xl:w-[1070px]">
              <p className="md:h-[113px] lg:w-full 2xl:w-full">
                <span className="text-orange-500 md:text-2xl xl:text-3xl 2xl:text-3xl mr-2">
                  WE OFFER
                </span>
                <span className="text-zinc-500 text-sm lg:text-lg 2xl:text-xl">
                  wide range of facilities to enhance your educational journey
                  and to provide an enriching environment equipped with all the
                  necessary amenities to support your growth and success.
                </span>
              </p>
              <div className=" grid grid-cols-4 text-center text-[#FD7900] mt-4 gap-4 xl:mt-8 2xl:mt-18 xl:-ml-4">
                <div className="flex flex-col self-start items-center">
                  <MdOutlineScience className="w-12 h-12 md:w-20 md:h-20 2xl:w-24 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Well equipped Lab
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdRestaurant className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Hygnieic Cafeteria
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <Bus className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Transportation
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdSportsSoccer className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Sports Activities
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdImportContacts className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Well stocked Library and Audio Visual lab
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdOutlineAccountBalance className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Spacious Auditorium Hall
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdOutlineDesktopWindows className="w-12 h-12 md:w-20 md:h-20 2xl:w-20 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Computer Lab
                  </label>
                </div>
                <div className="flex flex-col self-start items-center">
                  <MdOutlineSchool className="w-12 h-12 md:w-20 md:h-20 2xl:w-24 2xl:h-24" />
                  <label className="text-black text-[12px] xl:text-base 2xl:text-xl font-bold">
                    Academic Excellence
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <h1 className="text-center text-[#FD7900] mt-10 lg:mt-12 lg:text-4xl 2xl:mt-20">
          Browse through our Photo Gallery
        </h1>
        <hr className="w-[220px] 2xl:w-[280px] border-[#ea9443] mx-auto mt-5 lg:mt-8" />
        <div className="relative h-[150px] xl:h-[220px] mt-[5%] ">
          <Image
            width={2000}
            height={1800}
            alt="gallery"
            style={{ filter: "brightness(60%)" }}
            src="/assets/gallery.jpg"
            className="relative h-full w-full object-cover xl:mt-12"
          />
          <h1 className="text-white xl:w-[550px] h-full absolute top-3 xl:top-1/4 left-2">
            <span className="text-lg xl:text-[38px] font-semibold">
              Our Gallery
            </span>
            <span className="text-sm xl:text-[25px] font-semibold ml-3">
              preserves the essence of
              <br />
              our school dynamic journey.
            </span>
          </h1>
          <div className="text-white text-base lg:text-[22px] font-normal absolute bottom-2 lg:top-[45%] lg:right-2 lg:text-2xl lg:w-[157px] lg:h-[47px] p-2.5 g-2.5 lg:-mr-21 hover:text-black hover:[box-shadow-width:1px] hover:[box-shadow:0px_0px_0px_1px_black_inset]">
            <Link href="/gallery"> View Gallery </Link>
          </div>
        </div>
        {/* About Us */}
        <h1 className="text-center text-[#FD7900] mt-[5%] lg:mt-12 lg:text-4xl 2xl:mt-20">
          About Us
        </h1>
        <hr className="w-[12%] 2xl:w-[220px] lg:w-36 border-[#ea9443] mx-auto mt-[3%] lg:mt-8" />
        {/* <div className={noto.className}> */}
        <div className="relative  w-full h-[110px] md:h-44 xl:h-52">
          <Image
            width={2000}
            height={1600}
            alt="gallery"
            style={{ filter: "brightness(60%)" }}
            src="/assets/about.jpg"
            className="w-full object-cover object-bottom mt-[5%] lg:mt-12 h-full "
          />
          <ul className="grid absolute grid-cols-4 w-full top-1/4">
            <li className="flex items-center text-white border-r ">
              <Image
                width={1000}
                height={800}
                alt="years"
                src="/assets/icons/time.png"
                className="w-7 h-6 md:w-14 md:h-12 xl:w-[6em] xl:h-[6em] 2xl:w-28 2xl:h-24 sm:ml-6"
              />
              <span className=" text-[11px] md:text-lg xl:text-2xl lg:ml-6">
                <Number n={27} /> Years of <br />
                Journey
              </span>
            </li>
            <li className="flex gap-[5%] items-center text-white border-r">
              <Image
                width={1000}
                height={800}
                alt="students"
                src="/assets/icons/students.png"
                className="w-7 h-7 md:w-14 md:h-12  xl:w-[6em] xl:h-[6em] 2xl:w-32 2xl:h-32 sm:ml-6"
              />
              <span className="text-[11px] md:text-lg xl:text-2xl lg:ml-6">
                <Number n={1400} />
                Students
              </span>
            </li>
            <li className="flex items-center text-white border-r">
              <Image
                width={1000}
                height={800}
                alt="staffs"
                src="/assets/icons/group.png"
                className=" w-[10%] h-7 md:w-14 md:h-12  xl:w-[7em] xl:h-[6em] 2xl:w-32 2xl:h-32 sm:ml-6"
              />
              <span className="text-[11px] md:text-base xl:text-2xl lg:ml-6">
                <Number n={93} />
                Employees
              </span>
            </li>
            <li className="flex items-center text-white lg:w-40">
              <Image
                width={1200}
                height={1000}
                alt="awards"
                style={{ filter: "birghtness(400%)" }}
                src="/assets/icons/award.png"
                className=" w-[10%] h-7 md:w-14 md:h-12 xl:w-[6em] xl:h-[6em] 2xl:w-32 2xl:h-32 sm:ml-6"
              />
              <span className="text-center text-[11px] -ml-2 md:text-lg xl:text-2xl lg:ml-6">
                International
                <br />
                School
                <br />
                Award
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Beyond the Classroom */}
      <h1 className="text-center text-[#FD7900] mt-[5%] lg:mt-12 lg:text-4xl 2xl:mt-20">
        Beyond the Classroom: Explore, Excel, and Embrace Activities
      </h1>
      <hr className="w-[220px] lg:w-[55%] border-[#FD7900] border mx-auto mt-[5%] lg:mt-8" />
      {/* Container for Images design */}
      <div className="relative max-w-xl sm:max-w-none sm:w-[625px] sm:h-[500px] lg:w-[1020px] lg:h-[770px] xl:h-[900px] xl:mt-10 xl:w-[1280px] 2xl:w-[1500px] 2xl:h-[1000px] p-2 sm:p-0 mx-auto mt-[5%] ">
        <div className="relative grid grid-cols-2 gap-4 mx-auto w-10/12 sm:w-10/12 md:w-[80%] xl:w-[90%] h-full 2xl:w-[85%] 2xl:gap-x-14">
          {imgData.map((imgUrl, index) => (
            <div
              key={index}
              className="mx-auto w-11/12 max-w-full h-24 max-h-32 sm:max-h-none sm:w-56 sm:h-36 md:h-40 xl:w-[420px] lg:w-[320px] lg:h-60 2xl:w-[80%] xl:h-[300px] 2xl:h-80 self-center"
            >
              <Image
                src={imgUrl}
                className="rounded-lg lg:rounded-3xl object-cover w-full h-full"
                width={1450}
                height={1400}
                alt="beyond-classroom"
              />
            </div>
          ))}
        </div>
        {/* Vertical Lines */}
        <div className=" absolute top-1 md:top-1 lg:left-12 border lg:border-2 border-[#FD7900] h-full" />
        <div className=" absolute top-1 md:top-1 right-2 lg:right-12 border lg:border-2 border-[#FD7900] h-full" />
        {/* Horizontal Lines Left*/}
        <div className="absolute top-[19%] sm:top-20 lg:top-32 xl:top-40 lg:left-12 2xl:top-44 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900] "></div>
        <div className="absolute top-1/2 lg:left-12 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900]"></div>
        <div className="absolute bottom-[19%] sm:bottom-20 lg:bottom-32 xl:bottom-36 lg:left-12 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900]"></div>
        {/* Horizontal Lines Right*/}
        <div className="absolute top-[19%] sm:top-20 lg:top-32 xl:top-40 right-2 lg:right-12 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900] "></div>
        <div className="absolute top-1/2 right-2 lg:right-12 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900] "></div>
        <div className="absolute bottom-[19%] sm:bottom-20 lg:bottom-32 xl:bottom-36 right-2 lg:right-12 w-[10%] sm:w-16 lg:w-24 xl:w-24 2xl:w-32 border border-[#FD7900] "></div>
      </div>

      {/* Core Values */}
      <div className="flex relative text-white mt-16 xl:mt-16 max-w-sm sm:max-w-none sm:w-[620px] md:w-[740px] lg:w-[940px] xl:w-[1260px] 2xl:w-[1440px] h-auto mx-auto">
        <div className="ml-0 md:ml-8 xl:ml-40 w-2/3 sm:w-[62%] lg:w-7/12 xl:w-2/4 2xl:w-[768px] ">
          <Image
            src="/assets/values.jpg"
            className="w-full h-full object-cover rounded-[30px_0px_30px_0px] md:rounded-[45px_0px_45px_0px]"
            width={1640}
            height={1400}
            alt="core values"
          />
        </div>

        <div className="absolute right-0 -top-6 sm:top-[10%] xl:right-28 bg-[#FD7900] rounded-[30px_0px_30px_0px] md:rounded-[45px_0px_45px_0px]  xl:w-[35%] 2xl:w-[35%] w-[45%] h-36 sm:h-48 md:h-56 lg:h-72 xl:h-80 2xl:h-96">
          <div className={sans.className}>
            <div className="grid p-[10px_0px_0px_10px] md:p-[18px_0rem_0rem_18px] lg:p-7 gap-1 sm:gap-y-2">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] ">
                Core Values
              </h1>
              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl xl:mt-3 2xl:mt-5">
                Academic Excellence
              </p>
              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl 2xl:mt-3 ">
                Individual Growth
              </p>
              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl 2xl:mt-3">
                Diversity and Inclusivity
              </p>
              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl 2xl:mt-3">
                Integrity and Ethics
              </p>
              <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl 2xl:mt-3">
                Collaboration and Community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Events & News */}
      <h1 className="text-center text-[#FD7900] mt-7 md:mt-12 lg:text-4xl">
        Latest Events & News
      </h1>
      <hr className="w-[180px] lg:w-[16%] border-[#ea9443] border-[1.5px] mx-auto mt-4 md:mt-8" />
      {/* display news  */}
      <div className="grid lg:h-[460px] xl:h-[550px] mt-6 lg:mt-10 sm:grid-cols-2 md:grid-cols-4 gap-6 w-10/12 max-w-[380px] sm:w-9/12 sm:max-w-md md:w-[95%] lg:w-[85%] xl:w-[88%] md:max-w-[1550px] mx-auto p-5">
        {newsItem.map(({ title, img, date }, index) => (
          <div
            key={index}
            className={`${
              index === 1 || index === 3 ? "lg:self-end " : ""
            } w-64 sm:w-auto mx-auto`}
          >
            <Image
              width={1440}
              height={1400}
              alt="news"
              src={img}
              className=" h-40 lg:h-48 xl:h-64"
            />
            <p className="flex mt-3 xl:mt-8 text-sm lg:text-base justify-center">
              {title}
            </p>
            <hr className="w-[60%] border-[#C6BDBD] border-[1.5px] mx-auto mt-4 lg:mt-8" />
            <p className="flex mt-4 lg:mt-8 justify-center">{date}</p>
          </div>
        ))}
      </div>
      {/* </div> */}
      <div className="w-full my-6 md:mt-14 text-sm xl:text-3xl text-center text-[#FD7900] pb-4">
        <Link href="/news&events" className="border-2 border-black p-3">
          News & Events
        </Link>
      </div>
    </>
  );
}

const slides = [
  {
    url: "/assets/btc2.jpg",
  },
  {
    url: "/assets/btc6.jpg",
  },
  {
    url: "/assets/gallery/environment/1.jpg",
  },
  {
    url: "/assets/gallery/environment/5.jpg",
  },
];

const newsItem = [
  {
    title:
      "Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
    date: "14th-15th Jestha, 2080",
    img: "/assets/home/home1.jpg",
  },
  {
    title: "Lower Secondary English Spelling Contest",
    date: "5th Jestha, 2080",
    img: "/assets/home/home2.jpg",
  },
  {
    title:
      "Selection of all-School's Captains, Vice Captains, each house Captains, Vice-Captains, house teachers",
    date: "1st Jestha, 2080",
    img: "/assets/home/home3.jpg",
  },
  {
    title:
      "Parents oreientation program from class Nursery to UKG by Kabita Aryal madam",
    date: "29th Chaitra, 2079",
    img: "/assets/home/home4.jpg",
  },
];

const imgData = [
  "/assets/btc1.jpg",
  "/assets/btc2.jpg",
  "/assets/btc3.jpg",
  "/assets/btc4.jpg",
  "/assets/btc5.jpeg",
  "/assets/btc6.jpg",
];


