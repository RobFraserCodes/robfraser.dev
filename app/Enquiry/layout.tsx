import Footer from '../components/Footer'
import '../globals.css'

export const metadata = {
  title: 'Get a quote for your project',
  description: 'Building custom websites and web applications for small businesses and startups',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        {children}
        <Footer />
      </body>
    </html>
  )
}
