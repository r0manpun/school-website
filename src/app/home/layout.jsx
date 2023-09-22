import { Playfair_Display } from 'next/font/google'
import React from 'react'

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal"],
  });

export default function layout({children}) {
  return (
    <main className={playfair.className}> {children}</main>
  )
}