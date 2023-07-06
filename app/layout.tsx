import Footer from '@/components/Footer'
import Head from 'next/head'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Rob Fraser UX Designer and Developer',
  description: 'A personal portfolio and blog for Rob Fraser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-off-white dark:bg-dark'>
        <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9XHZF56DJJ"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9XHZF56DJJ');
            `,
          }}
        />
        </Head>
        <body className='flex flex-col text-black'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
