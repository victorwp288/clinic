import { Poppins, DM_Serif_Display } from 'next/font/google'
import '@/styles/tailwind.css'
import Navbar from '@/components/Navbar'

export const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--poppins',
})

export const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--serif',
})

export const metadata = {
  title: {
    template: '%s - Rawr XD',
    default: 'We will make you pretty! >:3',
  },
  description:
    'this is the sheesh of the sheesh, the best of the best, the cream of the crop, the top of the top',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSerif.variable} font-poppins h-full scroll-smooth bg-white antialiased `}
    >
      <Navbar />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
