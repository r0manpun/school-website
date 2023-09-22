import React from "react";
import { Playball } from "next/font/google";

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
});

export default function layout({ children }) {
  return <main className={playball.className}>{children}</main>;
}
