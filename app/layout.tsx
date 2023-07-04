import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header
            className="bg-purple-200 sticky top-0 h-14 flex justify-left items-center font-semibold uppercase"
          >
            <Button  variant="ghost">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </Button> 
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert mr-4"
              width={100}
              height={24}
              priority
            />
            <div className='text-xl'>NMB Bank LTD</div>
          </header>
          <div className="flex flex-col md:flex-row flex-1">
            <aside className="bg-gray-100 w-full md:w-60">
              <nav>
                <ul>
                  {menuItems.map(({ href, title }) => (
                    <li className='m-2' key={title}>
                      <Link href={href}
                          className="flex p-2 bg-gray-200 rounded hover:bg-gray-500 cursor-pointer text-xs"
                        >
                          {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
