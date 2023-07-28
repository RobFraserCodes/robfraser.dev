import React from 'react';
import { PortfolioItem } from '@/types/porfolioItems';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioExample(props: PortfolioItem) {
  return (
    <div className='flex w-full bg-secondary rounded-sm shadow-md border-secondary-dark border-y-8 skew-y-2 p-8 z-10'>
      <div className='-skew-y-2 flex justify-center items-center'>
        <Link href={props.link} >
          <Image src={props.img} alt={props.alt} width={400} height={300} className='rounded-md border-8 border-secondary-dark'/>
        </Link>
        <div className='mx-8 pt-8'>
          <p className='text-base md:text-xl lg:text-2xl font-bold text-white'>{props.title}</p>
          <p className='text-white mb-4'>{props.desc}</p>
          <div className='py-4 '>
            {props.tags.map((tag, index) => (
              <span key={index} className='text-white text-sm md:text-base lg:text-lg bg-secondary-dark rounded-sm px-2 py-1 m-1'>{tag}</span>
            ))}
          </div>
          <Link href={props.link} className=' text-white hover:bg-secondary-dark hover:p-2'>Find Out More  &gt;</Link>
        </div>
      </div>
    </div>
  )
}