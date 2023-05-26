'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './subComponents/socialIcons';
import Image from 'next/image';
import shape from '../../public/05.png';
import Skew from './subComponents/skew';

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <div className='relative dark:bg-dark'>
      <section id="hero" className="container flex justify-center mx-auto pb-40">
        <div className="flex flex-col items-center -top-24 text-black">
          <h1 className="mt-32">rob fraser</h1>
          <h3 className='font-thin'>UX Designer and Frontend Developer</h3>
          <div className="relative w-80 h-80">
            <motion.div
              className="bg-gradient-to-r from-primary to-primary-dark w-80 h-80 mx-auto absolute -x-10 rounded-full"
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

            <div className="text-center -mt-24">
              <SocialIcons />
            </div>
          </div>
        </div>
        <Skew colour='bg-primary-dark' area="bottom" />
      </section>
    </div>
  );
};

export default Hero;
