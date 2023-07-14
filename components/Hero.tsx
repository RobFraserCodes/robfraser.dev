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
        <div className="flex flex-col items-center -top-24 text-black">
          <h1 className="mt-32 dark:text-white bg-gradient-to-r from-primary-light to-secondary-dark bg-clip-text text-transparent">rob fraser</h1>
          <h3 className="font-thin dark:text-white">UX Designer and Frontend Developer</h3>
          <div className="text-center">
            <SocialIcons />
          </div>
          <div
            className="relative w-80 h-80 pt-8"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className={`bg-gradient-to-r from-primary to-secondary w-80 h-80 mx-auto absolute -x-10 rounded-full ${
                isHovered ? 'scale-110' : 'scale-100'
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
        </div>
        <Skew colour="bg-primary-dark" area="bottom" />
      </section>
    </div>
  );
};

export default Hero;