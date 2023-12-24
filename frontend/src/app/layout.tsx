import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {ReduxProvider} from '@/redux/provider'
import './globals.css'
import NavDrawer from "@/app/components/NavDrawer";
import {
    AiOutlineInstagram,
    AiOutlineShopping,
    AiOutlineReddit,
    AiOutlineYoutube,
    AiOutlineMenu
} from "react-icons/ai";
import Logo from "../../public/wealthfront-logo.png";
import Image from "next/image";
import React from "react";
import {Toaster} from "react-hot-toast";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>


        <ReduxProvider>
            <NavDrawer/>
            <div className="flex justify-center items-center h-screen">

                <div className="bg-white pb-12 rounded-lg shadow-lg max-w-[50%] flex flex-col justify-center items-center w-full">
                    <Image src={Logo} alt="Wealthfront Logo" width={400} height={400} />
                    {children}

                </div>
            </div>
        </ReduxProvider>
  <Toaster/>

        </body>
        </html>
    )
}
