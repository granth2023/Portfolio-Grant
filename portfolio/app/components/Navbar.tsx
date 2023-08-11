"use client"

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import  { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
    let pathname = usePathname() || "/";
    return (
        <DisclosureContainer as "nav">
            {({ open }) => (
                <>
                <div className="max-w6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex jsutify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <Link href="/">
                                    <h1 className="text-2xl font medium"> 
                                        Grant <span span className="text-teal-5000"> Harris</span>
                                        </h1>

                                </Link>
                                <Themebutton/>
                            </div>
                        </div>
                    </div>

                </div>
                
                </>
            )}


        </DisclosureContainer>
    )



}