'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '/public/logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

    const [state, setState] = useState(false)

    const navigation = [
        { title: "About", path: "#about" },
        { title: "Skills", path: "#skills" },
        { title: "Portfolio", path: "#portfolio" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "#contact" }
    ];

    return (
        <nav className="bg-off-white dark:bg-dark  border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <Image
                            src={logo}
                            width={200}
                            alt="Rob Fraser UX Developer logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-black hover:font-medium"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <XMarkIcon className="w-6 h-6 dark:stroke-white" />
                                ) : (
                                    <Bars3Icon className="w-6 h-6 dark:stroke-white" />
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-black dark:text-white hover:text-primary text-lg">
                                        <a href={isOnHomePage ? item.path : `/${item.path}`}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-black/30 dark:bg-white/30 lg:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="/cv" className="hidden lg:block py-3 text-center text-black dark:text-white hover:text-primary border rounded-lg md:border-none text-lg">
                                    My CV
                                </a>
                            </li>
                            <li>
                                <a href="/enquiry" className="hidden py-3 px-4 font-medium text-center text-white bg-primary hover:bg-primary-dark active:bg-primary-dark active:shadow-none rounded-lg shadow lg:inline uppercase">
                                    Build My App
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}