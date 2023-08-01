import React from 'react';
import { portfolio } from '@/data/portfolio';
import { PortfolioItem } from '@/types/porfolioItems';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  }
}

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  slug: string;
} 

export default async function Page({ params }: Props) {
  const res = await fetch(`@/data/portfolio/${params.slug}`);
  return (
    <section className='h-screen bg-off-white dark:bg-dark dark:text-white'>
      <h1>coming soon</h1>
    </section>
  )
}