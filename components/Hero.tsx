'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './subComponents/socialIcons';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import profile from '/public/images/rob-fraser-home.png';
import Skew from './subComponents/skew';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div className="relative bg-off-white dark:bg-dark">
      <section id="hero" className="container flex justify-center mx-auto pb-40">
        <div className="flex flex-col items-center text-black">
          <h3 className="dark:text-white px-4 py-2 mt-16 font-thin uppercase">UX Designer and Frontend Developer</h3>
          <h1 className="dark:text-white bg-gradient-to-r from-primary-light to-secondary-dark bg-clip-text text-transparent mb-16">rob fraser</h1>
          <div
            className="relative w-80 h-80 pt-8"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='absolute w-60 h-60 bg-primary/40 rounded-full right-48 top-32'></div>
            <div className='absolute w-36 h-36 bg-secondary/20 rounded-full left-64 top-8'></div>
            <div className='absolute w-16 h-16 bg-primary rounded-full right-96 top-36'></div>
            <div className='absolute bg-primary text-white rounded-full shadow-sm left-64 top-48 z-30 px-4 py-3'>Welcome!</div>
            <Link href="/build-my-app">
            <div className='absolute left-64 top-64 z-40 flex flex-col lg:flex-row space-x-4'>
              <div className='w-16 h-16 mt-2 lg:mt-0 rounded-full bg-secondary hover:bg-secondary-dark flex items-center justify-center'>
                <SparklesIcon className='w-6 h-6 text-white'/>
              </div>
              <div className='bg-white rounded-full shadow-sm px-4 py-3 text-sm w-48 hidden md:block'>Ready to build your own website or app?</div>
            </div>
            </Link>
            <motion.div
              className={`bg-light w-80 h-80 mx-auto absolute -x-10 rounded-full ${
                isHovered ? 'scale-110 bg-gradient-to-r from-primary to-secondary' : 'scale-100'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <div className="absolute w-80 h-80 overflow-hidden rounded-full">
                <Image src={profile} alt="Rob Fraser, UX Developer 3D portrait" />
              </div>
            </motion.div>
          </div>
              <div className="text-center mt-16">
                <SocialIcons />
              </div>
        </div>
        <Skew colour="bg-primary-dark" area="bottom" />
      </section>
    </div>
  );
};

export default Hero;