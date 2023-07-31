import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paragon Design',
  description: 'Generated by create Paragon Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" type="image/x-icon" sizes="any"></link>
      </head>
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className='min-h-[calc(100vh-538px)]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
