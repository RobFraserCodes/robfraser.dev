'use client';

import React from 'react'
import { motion } from 'framer-motion';
import SocialIcons from './subComponents/socialIcons';
import Image from 'next/image';
import shape from '../../public/shape_1.png';

type Props = {}

export default function Hero({}: Props) {
  return (
    <section id="hero" className='container flex justify-center mx-auto mb-96'>
        <div className='flex flex-col items-center -top-24'>
            <h1 className='h1 mt-64'>
              Rob Fraser
            </h1>
            <h2 className='font-semibold uppercase text-sm'>
              UX Designer and Frontend Developer
            </h2>
            <div className='pb-20'>
              <SocialIcons />
            </div>
            <div className='relative w-full h-40'>
              <motion.div 
                className='bg-slate-800/20 w-80 h-80 mx-auto absolute -x-10 rounded-full'
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%" }}>
              </motion.div>
              <Image src={shape} alt="Picture of the author" className='absolute w-80 h-80'/>
            </div>
        </div>
    </section>
  )
}