'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Props = {}

function NavBar({}: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
      
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
    };

  return (
    <nav className=' w-full z-20'>
        <div className='flex justify-between items-center max-w-5xl mx-auto px-20 lg:px-8 m-4 min-h-[60px]'>
            <div className=''>
                <h1 onClick={() => scrollToSection("hero")} className='font-Graun text-2xl uppercase'>RobFraser.dev</h1>
            </div>
            <div className='flex hidden md:flex '>
                <button onClick={() => scrollToSection("about")} className='px-4 font-semibold uppercase'>About</button>
                <button onClick={() => scrollToSection("contact")} className='px-4 font-semibold uppercase'>Contact</button>
            </div>
            <motion.div             
                whileTap={{ scale: 1.2, rotate: 45 }}
                >
                <button className={menuOpen ? 'hidden' : 'flex'}>
                    <Bars3BottomRightIcon color="white" className='h-6 w-6 md:hidden' onClick={handleNav} />
                </button>
                <button className={menuOpen ? 'flex' : 'hidden'}>
                    <XMarkIcon className='h-6 w-6 md:hidden' onClick={handleNav} />
                </button>
                <a href="/CV">
                    <button type="button" className='rounded-md hidden md:flex font-semibold p-2 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg px-6'>
                    My CV
                    </button>
                </a>   
            </motion.div>
        </div>
        <div className={
            menuOpen ? 'flex md:hidden' : 'hidden'
            }>
            <div className='pl-20 flex flex-col pb-8 items-start'>
                <button onClick={() => scrollToSection("about")} className='py-2 font-semibold'>About</button>
                <button onClick={() => scrollToSection("contact")} className='py-2 font-semibold'>Contact</button>
                <a href="/CV"><button className='p-2 rounded-md my-2 px-4 font-semibold bg-orange-400 shadow-md'>View My CV</button></a> 
            </div>
        </div>
    </nav>
  );
}

export default NavBar;