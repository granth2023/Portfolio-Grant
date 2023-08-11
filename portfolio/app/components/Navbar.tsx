"use client"

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import  { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
    let pathname = usePathname() || "/";
    return (
        <Disclosure as "nav">
            {({ open }) => (
                <>
                <div className="max-w6-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <Link href="/">
                                    <h1 className="text-2xl font-medium"> 
                                        Grant <span className="text-teal-5000">Harris</span>
                                        </h1>

                                </Link>
                             
                            </div>

                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                <Link
                                href="/"
                                prefetch
                                className={`${
                                    pathname === "/"
                                    ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 border-b-2 text-sm font-medium"
                                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white infline-flex items-center px-1 pt-1 obrder-b-2 text-sm font-medium"
                                }`}
                                >
                                    Home
                                </Link>
                                <Link
                                href="/about"href="/projects"
                                prefetch
                                className={`${
                                    pathname === "/projects"
                                    ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 border-b-2 text-sm font-medium"
                                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white infline-flex items-center px-1 pt-1 obrder-b-2 text-sm font-medium"
                                }`}
                               >
                                Projects
                                </Link> 
                                <Themebutton/>
                            </div>
                        </div>
                        <
                    </div>


                </div>
                
                </>
            )}


        </Disclosure>
    )



}