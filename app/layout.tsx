import Footer from '@/components/Footer';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import './globals.css';

export const metadata = {
  title: 'Rob Fraser UX Designer and Developer',
  description: 'A personal portfolio and blog for Rob Fraser',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <body className="flex flex-col text-black">
        {children}
        <Footer />
      </body>
    </>
  );
}
