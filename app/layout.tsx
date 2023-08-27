import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Rob Fraser UX Designer and Developer',
  description: 'A personal portfolio and blog for Rob Fraser',
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <body className="flex flex-col text-black">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
