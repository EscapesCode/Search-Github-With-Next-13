import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  // variable: '--font-poppins',
});
export const metadata = {
  title: 'Cari Orang Github',
  description: 'Cari Orang Di github berdasarkan username github',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className} >
      <body className='min-h-screen flex items-center justify-center bg-slate-300'>{children}</body>
    </html>
  )
}
