import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import AuthenticationPage from '@/components/login'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'


const inter = Inter({ subsets: ['latin'] })

const user_logged_in = false;


const menuItems = [
  {
    href: '/',
    title: 'Homepage',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

export const metadata = {
  title: 'FinUi',
  description: 'Yaape Company LTD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  if (user_logged_in) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex flex-col md:flex-row flex-1">
                <Sidebar />
                <main className="flex-1">{children}</main>
              </div>            
          </div>
          
        </body>
      </html>
    )
  }else{  
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
              <div className="flex flex-col md:flex-row flex-1">
                <main className="flex-1">
                  <AuthenticationPage />
                </main>
              </div>
          </div>
        </body>
      </html>
    )
  }
}
