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
    <html lang="en">
      <body className='flex flex-col'>
        {children}
      </body>
    </html>
  )
}
