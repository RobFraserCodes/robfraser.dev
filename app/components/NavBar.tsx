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
                <h1 onClick={() => scrollToSection("hero")} className='font-Graun text-2xl'>RobFraser</h1>
            </div>
            <div className='flex hidden md:flex '>
                <button onClick={() => scrollToSection("about")} className='px-4 font-light uppercase hover:font-semibold'>About</button>
                <button onClick={() => scrollToSection("skills")} className='px-4 font-light uppercase hover:font-semibold'>Skills</button>
                <button onClick={() => scrollToSection("portfolio")} className='px-4 font-light uppercase hover:font-semibold'>Portfolio</button>
                <button onClick={() => scrollToSection("blog")} className='px-4 font-light uppercase hover:font-semibold'>Blog</button>
                <button onClick={() => scrollToSection("contact")} className='px-4 font-light uppercase hover:font-semibold'>Contact</button>
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
                <a href="/CVPage">
                    <button type="button" className='rounded-md hidden lg:flex font-semibold p-2 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg px-6'>
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
                <button onClick={() => scrollToSection("skills")} className='py-2 font-semibold'>Skills</button>
                <button onClick={() => scrollToSection("portfolio")} className='py-2 font-semibold'>Portfolio</button>
                <button onClick={() => scrollToSection("blog")} className='py-2 font-semibold'>Blog</button>
                <button onClick={() => scrollToSection("contact")} className='py-2 font-semibold'>Contact</button>
                <a href="/CVPage"><button className='p-2 rounded-md my-2 px-4 font-semibold text-white bg-orange-400'>View My CV</button></a> 
            </div>
        </div>
    </nav>
  );
}

export default NavBar;