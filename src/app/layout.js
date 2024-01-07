import SmoothScroll from '@/components/SmoothScroll';
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({ weight:'400', style:'normal', subsets:['latin']});

export const metadata = {
  title: 'ARSDEV.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={bebas.className}>
      <SmoothScroll>{children}</SmoothScroll></body>
    </html>
  )
}
