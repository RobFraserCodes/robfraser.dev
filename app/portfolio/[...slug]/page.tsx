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

export default function Page({ params }: { params: { slug: string } }) {
  const portfolioItem = portfolio.find((item) => item.slug === params.slug);
  console.log({portfolioItem.slug});

  return (
    <section className='h-screen bg-off-white dark:bg-dark dark:text-white'>
      <h1>coming soon</h1>
      {params.slug}
    </section>
  )
}