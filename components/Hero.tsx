'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './subComponents/socialIcons';
import Image from 'next/image';
import profile from '/public/profile.png';
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
          <h3 className=" text-primary dark:text-white bg-primary/10 px-4 py-2 mt-16 mb-4 rounded-full">UX Designer and Frontend Developer</h3>
          <h1 className="dark:text-white bg-gradient-to-r from-primary-light to-secondary-dark bg-clip-text text-transparent mb-16">rob fraser</h1>
          <div
            className="relative w-80 h-80 pt-8"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='absolute w-60 h-60 bg-primary/40 rounded-full right-48 top-32'></div>
            <div className='absolute w-36 h-36 bg-secondary/20 rounded-full left-64 top-8'></div>
            <div className='absolute w-16 h-16 bg-secondary rounded-full left-96 top-36'></div>
            <div className='absolute bg-primary text-white rounded-full shadow-sm left-64 top-48 z-30 px-4 py-3'>Welcome!</div>
            <div className='absolute bg-white rounded-full shadow-sm left-64 top-64 z-30 px-4 py-3 text-sm w-48'>Ready to build your own website or app?</div>
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
              <div className="absolute w-112 h-112 overflow-hidden rounded-full">
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