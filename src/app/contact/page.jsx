
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone, FiMail } from "react-icons/fi";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Contact() {
  
  return (
    <div className="bg-gradient-to-r from-teal-100 to-rose-200">
      <div className="w-full h-full max-w-[1540px] mx-auto ">
        <div className="flex flex-col w-full h-full">
          <div className=" text-sm md:text-xl xl:text-2xl font-semibold ml-3 md:ml-20 2xl:pl-16 mt-8 gap-y-3">
            <div className="flex items-center gap-2">
              <SlLocationPin className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              <label>Kolpatan-15, Pokhara,Kaski,Nepal</label>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              <a href="tel:061-430577">+977 061-430577</a>,
              <a href="tel:061-430191">061-430191</a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className=" w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
              <a href="mailto:rainbowacademics52@gmail.com">
                rainbowacademic52@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row xl:p-12 mb-10 sm:mb-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.438775576853!2d83.99334847517551!3d28.19397877590701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c07bd41ff7%3A0x8b52b2ec810f8467!2sRainbow%20Academic%20Homes%20Secondary%20School!5e0!3m2!1sen!2snp!4v1688371164116!5m2!1sen!2snp"
              width="800"
              height="550"
              style={{ border:"0"}}
              // referrerpolicy="no-referrer-when-downgrade"
              className=" my-8 2xl:ml-12 xl:ml-6 mx-auto w-80 h-80 sm:w-[47vw] sm:h-[] md:h-[370px] lg:w-[48vw] lg:h-[460px] 2xl:w-[740px]  xl:h-[558px] lg:p-4"
            ></iframe>
            <div><ContactForm/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
