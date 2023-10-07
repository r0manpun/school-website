"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getNotices = async () =>{
  try {
    const res = await fetch("http://localhost:3000/api/notice", {
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

export const GetNotices = () => {
  const [page, setPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);
  const [notices,setNotices]= useState([]);

  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth;
      setNoticesPerPage(screenSize > 1530 ? 6 : 5);
    }
    handleResize(); // Initial call to set the initial value
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  useEffect(()=>{
    async function fetchNotices(){
      const {notices} = await getNotices();
      setNotices(notices.reverse());
    }fetchNotices()
  },[])
  const lastIndex = page * noticesPerPage;
  const firstIndex = lastIndex - noticesPerPage;
  const notice = notices.slice(firstIndex, lastIndex);
  const npage = Math.ceil(notices.length / noticesPerPage);
  const numbers = Array.from(
    { length: npage },
    (_, i) => i + 1
  ).slice(0);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  function ChangePage(id) {
    setPage(id);
  }
  return (
    <>
      <div className="bg-[#fd7900] flex justify-center items-center rounded-[12px_12px_0px_0px] w-full h-[50px] lg:h-14 2xl:h-[78px] text-[#ffffff] text-xl xl:text-2xl 2xl:text-3xl">
        Important Notices
      </div>
      {/* <div className="flex flex-col justify-between items-center h-11/12"> */}
      <ul>
        {notice.map((item, index) => (
          <li key={index} className="flex justify-center p-2 ">
          <div className="flex-col rounded-xl w-[95%] lg:w-11/12 h-16 xl:h-20 bg-zinc-100 shadow-md ">
              <div className="ml-3 xl:text-xl 2xl:text-lg mt-2 font-extrabold">
                {item.title}
                <p className="text-base xl:text-xl font-normal line-clamp-1">{item.description}</p>
              </div>
              </div>
          </li>
        ))}
      </ul>
      <div className=" flex w-full justify-center pt-2 md:pt-3">
        <button className="border" onClick={prevPage} disabled={page === 1}>
          ⬅️
        </button>
        {numbers.map((n) => (
          <div key={n} className={`${page === n ? "active " : ""} border w-6`}>
            <a
              href="#"
              onClick={() => ChangePage(n)}
              className="flex justify-center"
            >
              {n}
            </a>
          </div>
        ))}
        <button className="border" onClick={nextPage} disabled={page === npage}>
          ➡️
        </button>
      </div>
    {/* </div> */}
    </>
  );
};