import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["500", "600"],
  subsets: ["latin"],
  style: ["normal"],
});


export default function page() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-violet-100">
    <div className="max-w-[1530px] mx-auto">
      <div className={playfair.className}>
        <h1 className="text-[2.5vw] lg:text-2xl xl:text-4xl text-center pt-8 font-semibold">
          Our Mission and Vision
        </h1>
        <div className="flex w-11/12  2xl:h-[457px] mx-auto mt-6 gap-12 px-6">
          <Image
            width={2180}
            height={1365}
            src="/assets/about/about1.jpg"
            className="w-[45vw] 2xl:w-[658px] h-full "
            alt="mission"
          />
          <div className="w-[40%] h-[45%] xl:p-4">
            <h1 className="text-[2vw] xl:text-3xl font-bold">Mission</h1>
            <p className="text-[1.5vw] 2xl:text-[22px] mt-3">
              Our mission is to empower students through a transformative
              educational experience that ignites their intellectual curiosity,
              nurtures their personal growth, and prepares them to become
              influential global citizens. Guided by our motto, &quot;Enlighten
              Yourself to Enlighten Your Future,&quot; we are dedicated to
              fostering a love for learning, cultivating critical thinking
              skills, and instilling values of integrity, empathy, and
              resilience.
            </p>
          </div>
        </div>
        <div className="flex w-11/12 2xl:h-[457px] mx-auto mt-6 gap-6 2xl:gap-12 px-6">
          <div className="w-[40%] h-[45%] pt-6  ml-auto">
            <h1 className="xl:text-3xl font-bold ">Vision</h1>
            <p className="text-[1.5vw] 2xl:text-[22px] mt-3">
              Our vision is to empower students to reach their full potential
              academically, socially, and emotionally. We create a supportive
              and inclusive learning community that nurtures a passion for
              knowledge, cultivates critical thinking skills, and prepares
              students to thrive in an ever-changing global society. Join us as
              we shape the leaders of tomorrow.
            </p>
          </div>
          <Image
            width={2180}
            height={1365}
            src="/assets/about/about2.jpg"
            className="w-[45vw] 2xl:w-[658px] h-full "
            alt=""
          />
        </div>
        <h1 className="text-[2.5vw] lg:text-2xl xl:text-3xl text-center mt-8 font-medium">
          Welcome To Rainbow Academic Homes
        </h1>
        <div className="flex w-11/12 mx-auto mt-6 gap-6 2xl:gap-12">
          <Image
            width={2048}
            height={1365}
            src="/assets/about/about3.jpg"
            className="w-[55vw] h-[30vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh]  2xl:h-[600px] 2xl:w-[65%]"
            alt="teachers"
          />
          <section className="flex flex-col w-[45%] h-60 sm:h-80 md:h-[380px] lg:h-[480px] xl:h-[580px] 2xl:h-[620px] border-2 border-black rounded-2xl ">
            <div className="text-[1.5vw] 2xl:text-[22px] h-[30vh] sm:h-[45vh] md:h-[60vh] lg:h-[79vh] xl:h-[75vh] 2xl:h-[540px] p-2 sm:p-4 overflow-hidden ">
              <article className="">
                Located in Kolpatan-15, Pokhara, Nepal, Rainbow Academic Homes
                has been a reputable educational institution since its
                establishment in 1995 AD. We pride ourselves on providing a
                nurturing and dynamic learning environment for our students. At
                RAH, we are committed to academic excellence, personal growth,
                and holistic development. Our dedicated faculty members are
                passionate educators who strive to inspire and empower every
                student. Through our rigorous curriculum and innovative teaching
                methods, we foster a love for learning and critical thinking
                skills that prepare our students for future success. Our
                students have achieved remarkable milestones, both nationally
                and internationally, bringing home numerous awards and
                recognition. We take immense pride in their accomplishments,
                which showcase their talent, hard work, and the quality of
                education provided.
              </article>
            </div>
            <button className="self-center border-[1px] border-black text-[1.2vw] xl:text-xl w-16 h-7 md:w-20 md:h-9 xl:w-28 xl:h-10 mt-2 md:mt-3 xl:mt-4">
              View More
            </button>
          </section>
        </div>
        <div className="w-[90%] md:w-[80%] h-72 sm:h-[360px] lg:h-[400px] xl:h-[521px] mx-auto mt-24 md:mt-44 xl:mt-60 relative">
          <Image
            width={1000}
            height={600}
            src="/assets/about/about4.jpg"
            className="absolute rounded-2xl -top-10 right-2 w-[35%] 2xl:h-[421px]"
            alt=""
          />
          <div className="w-[65%] h-[27vh] sm:h-[37vh] md:h-[43vh] lg:h-[55vh] xl:h-[462px] bottom-2 bg-[#FD7900F0] ml-9 md:ml-12">
            <div className="w-[46vw] h-[90%] text-white p-6 overflow-hidden">
              <h1 className="text-[1.8vw] xl:text-2xl font-bold lg:ml-4 ">
                Message from The Founder, Chairman
              </h1>
              <p className="text-[1.3vw] xl:text-xl mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan leo non neque hendrerit, sed pulvinar odio
                sollicitudin. Sed mollis, nisl eu egestas scelerisque, velit ex
                aliquam massa, in consectetur eros erat et magna. Vivamus sit
                amet pharetra ligula. Suspendisse potenti. Integer laoreet leo
                sit amet eleifend fringilla. Nam fringilla, felis nec lacinia
                dictum, ipsum diam condimentum lacus, et tincidunt purus est ac
                purus. Nulla at erat in tortor suscipit hendrerit eget ac arcu.
                Ut tempus quam vel tellus consequat, id posuere nisi feugiat.
                Integer eu congue justo. Aenean ullamcorper tincidunt augue, vel
                interdum diam mollis eu. Sed at mi dui. Donec nec elit
                hendrerit, dignissim felis sed, laoreet lacus. Aliquam non nunc
                vitae velit euismod semper. Vivamus commodo scelerisque ex vitae
                malesuada.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] h-72 sm:h-[360px] lg:h-[400px] xl:h-[521px] mx-auto -mt-20 lg:mt-8 relative">
          <Image
            width={1000}
            height={600}
            src="/assets/about/about5.jpg"
            className="absolute rounded-2xl  bottom-20  md:bottom-5 left-12 object-cover w-[35%] h-40 sm:h-56 md:h-60 lg:h-72 xl:h-96 2xl:h-[421px]"
            alt=""
          />
          <div className="w-[65%] bg-[#FD7900F0]  h-[27vh] sm:h-[37vh] md:h-[43vh] lg:h-[55vh] xl:h-[462px] bottom-2 ml-auto ">
            <div className="w-[46vw] h-[90%] text-white p-6 overflow-hidden ml-10">
              <h1 className="text-[1.8vw] xl:text-2xl font-bold lg:ml-4 ">
                Message from The Founder, Principal
              </h1>
              <p className="text-[1.3vw] xl:text-xl mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                accumsan leo non neque hendrerit, sed pulvinar odio
                sollicitudin. Sed mollis, nisl eu egestas scelerisque, velit ex
                aliquam massa, in consectetur eros erat et magna. Vivamus sit
                amet pharetra ligula. Suspendisse potenti. Integer laoreet leo
                sit amet eleifend fringilla. Nam fringilla, felis nec lacinia
                dictum, ipsum diam condimentum lacus, et tincidunt purus est ac
                purus. Nulla at erat in tortor suscipit hendrerit eget ac arcu.
                Ut tempus quam vel tellus consequat, id posuere nisi feugiat.
                Integer eu congue justo. Aenean ullamcorper tincidunt augue, vel
                interdum diam mollis eu. Sed at mi dui. Donec nec elit
                hendrerit, dignissim felis sed, laoreet lacus. Aliquam non nunc
                vitae velit euismod semper. Vivamus commodo scelerisque ex vitae
                malesuada.
              </p>
            </div>
          </div>
        </div>
        {/* Meet Our Team */}
        <h1 className="text-[3vw] xl:text-3xl font-bold text-center md:mt-24 ">
          Meet Our Team
        </h1>
        <div className="flex flex-wrap max-w-[817px] mt-10 gap-6 gap-y-10 mx-auto pb-24 justify-center">
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about4.jpg"
            alt=""
            className="w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56 object-cover"
          />
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about5.jpg"
            alt=""
            className=" w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56  object-cover"
          />
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about8.png"
            alt=""
            className="w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56  object-cover "
          />
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about6.jpg"
            alt=""
            className="w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56  object-cover "
          />
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about7.png"
            alt=""
            className="w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56  object-cover "
          />
          <Image
            width={1430}
            height={1365}
            src="/assets/about/about5.jpg"
            alt=""
            className="w-[22vw] sm:w-[25vw] h-[18vh] sm:h-[25vh] md:h-[30vh] lg:w-64 lg:h-56  object-cover "
          />
        </div>
      </div>
    </div>
    </div>
  );
}
