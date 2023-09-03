import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { Poppins } from 'next/font/google'
import classNames from "classnames";

const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin']
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visited',
  description: 'Track your visited places',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className={ `p-4 font-black text-3xl text-red-700
      ` }>Visited</h1>
      {children}</body>
    </html>
  )
}
