import Footer from '@/components/Footer';
import Head from 'next/head';
import Script from 'next/script';
'use client';

import useEffect from 'react';
import './globals.css';

export const metadata = {
  title: 'Rob Fraser UX Designer and Developer',
  description: 'A personal portfolio and blog for Rob Fraser',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11236894671');
  }, []);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11236894671"></script>
      </Head>
      <body className="flex flex-col text-black">
        {children}
        <Footer />
      </body>
    </>
  );
}
