import React from "react";
import { GetEvents } from "./getEvents";

export default function News() {

  return (
    
    <div className={`max-w-[1543px] mx-auto bg-slate-200`}>
      <div className="flex justify-center items-center gap-3 text-base xl:text-3xl pt-10 ">
        <hr className=" border-black w-8 xl:w-20" />
        News And Events
        <hr className="border-black w-8 xl:w-20" />
      </div>
      <GetEvents/>
    </div>
  );
}

