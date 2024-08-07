import SmoothScroll from '@/components/SmoothScroll';
import { Inter, Bebas_Neue, Poppins } from 'next/font/google'
import './globals.css'
const inter = Inter({ weight:['100', '200', '300', '400', '500', '600','700', '800',], subsets: ['latin'] })
const poppins = Poppins({ weight:['100', '200', '300', '400', '500', '600','700', '800',], subsets: ['latin'] })
const bebas = Bebas_Neue({ weight:'400', style:'normal', subsets:['latin']});

export const metadata = {
  title: 'ARSDEV.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={poppins.className}>
           {children}
      </body>
    </html>
  )
}
