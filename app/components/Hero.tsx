'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './subComponents/socialIcons';
import Image from 'next/image';
import shape from '../../public/05.png';

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <div className='bg-white relative'>
      <section id="hero" className="container flex justify-center mx-auto pb-40">
        <div className="flex flex-col items-center -top-24">
          <h1 className="mt-36 text-purple-800">rob fraser</h1>
          <h3 className='text-purple-800'>UX Designer and Frontend Developer</h3>
          <div className="relative w-80 h-80">
            <motion.div
              className="bg-purple-800/20 w-80 h-80 mx-auto absolute -x-10 rounded-full"
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: '100%',
              }}
            >
              <div className="absolute w-112 h-112 overflow-hidden rounded-full">
                <Image src={shape} alt="Rob Fraser, UX Developer 3D portrait" />
              </div>
            </motion.div>

            <div className="text-center -mt-20">
              <SocialIcons />
            </div>
          </div>
        </div>

      <div className="absolute -bottom-14 left-0 w-full h-40 mt-20 bg-white transform skew-y-3"></div>
      </section>
    </div>
  );
};

export default Hero;
