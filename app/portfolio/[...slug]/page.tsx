import React from 'react';
import { portfolio } from '@/data/portfolio';
import { PortfolioItem } from '@/types/porfolioItems';
import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string } }) {
  const article = portfolio.find((item) => item.slug === params.slug);

  return (
    <section className='h-screen bg-off-white dark:bg-dark dark:text-white'>
      <h1>{article?.title}</h1>
    </section>
  )
}
