"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


export default function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "right") {
      setCurrentIndex(
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    } else {
      setCurrentIndex(
        currentIndex === 0 ? slides.length - 1 : currentIndex - 1
      );
    }
  };

  return (
    <div className=" h-full relative">
      <button
        className="absolute text-3xl text-white top-1/2 left-1"
        onClick={() => handleSlide("left")}
      >
        <MdOutlineArrowBackIosNew />
      </button>
      {slides.map((item, index) => (
        <Image
        width={1400}
        height={1200}
          src={item.url}
          key={index}
          alt={`slider${index}`}
          className={
            currentIndex === index
              ? "rounded-2xl w-full h-full object-cover"
              : "hidden"
          }
        />
      ))}
      <button
        className="absolute text-3xl text-white top-1/2 right-1"
        onClick={() => handleSlide("right")}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}
