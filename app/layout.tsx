import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Rob Fraser UX Designer and Developer',
  description: 'A personal portfolio and blog for Rob Fraser',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
