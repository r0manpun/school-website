import React from 'react'
import {Open_Sans} from 'next/font/google'

const sans = Open_Sans({
    subsets: ["latin"],
    weight: ["400","600"],
  });


export default function layout({children}) {
  return (
    <div className={sans.className}>{children}</div>
  )
}