"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'
import Image from "next/image";

const ContactForm = () => {

 const [submissionStatus, setSubmissionStatus] = useState(null);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !phoneNumber || !subject || !message) {
      alert("all field  are required");
      return;
    }
    console.log({ fullname, email, phoneNumber, subject, message });
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify({
          fullname,
          email,
          phoneNumber,
          subject,
          message,
        }),
      });
      if (res.ok) {
        router.push("/dashboard/addContact");
        setSubmissionStatus("success");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("failed to create a contact details");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>{submissionStatus === "success" ? (
        <div className="text-green-600 text-center ">
          Your message has been submitted successfully !
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-80 h-72 sm:h-80 2xl:w-[590px] md:w-[44vw] md:h-[362px] lg:h-[425px] xl:h-[540px]  2xl:h-[560px] opacity-70 bg-white rounded-2xl xl:rounded-xl mx-auto pt-4"
        >
          <h1 className="lg:text-2xl xl:text-3xl text-center mt-2 xl:mt-6 font-medium">
            Reach Out to Us
          </h1>
          <hr className="w-[30%] border-[#CAC6C6] mx-auto mt-2" />
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            type="text"
            placeholder="Full Name"
            className="w-[75%] h-8 md:h-11 lg:h-12 ml-12 mt-2 xl:mt-8 xl:h-16 border-b-[1px] border-black"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="w-[75%] h-8 md:h-11  lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black"
            required
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="tel"
            placeholder="Phone number"
            className="w-[75%] h-8 md:h-11  lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black"
            required
          />
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            type="text"
            placeholder="Subject"
            className="w-[75%] h-8 md:h-11  lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black"
            required
          />
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Message"
            className="w-[75%] h-8 md:h-11  lg:h-12 ml-12 xl:h-16 border-b-[1px] border-black"
            required
          />
          <button
            type="submit"
            className="flex justify-center items-center border xl:border-2 border-black w-20 h-8 md:w-28 md:h-12 xl:w-32 xl:h-14 rounded-3xl text-[12px] lg:text-base font-semibold mt-5 lg:mt-8 mx-auto"
          >
            Submit
            <Image
              width={1000}
              height={800}
              src="/assets/icons/s.png"
              className="w-5 h-4 xl:w-[34px] xl:h-[34px]"
              alt="submit"
            />
          </button>
        </form>
      )}
      {/* Contact Form */}</div>
  )
}

export default ContactForm