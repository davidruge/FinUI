import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          
          if (user_logged_in) {
            <>
              <header
                className="bg-purple-200 sticky top-0 h-14 flex justify-space-between items-center font-semibold flow-root"
              >
                <div className='flex float-left items-center mt-0'>
                  <Button  variant="ghost" className='hover:None'>
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
                    src="/logos/logo_blue_circle.png"
                    alt="Vercel Logo"
                    className="dark:invert mr-4"
                    width={50}
                    height={24}
                    priority
                  />
                  <div className='text-2xl dark:invert'>Yaape Company LTD</div>
                </div>

                <div className='flex float-right items-center mt-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-xl">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className='ml-3'>
                    <div className='text-base -mb-7'>David Rugeihyamu</div><br/>
                    <div className='text-sm'>Senior Data Engineer</div>
                  </div>

                  <Button  variant="ghost" className='hover:None'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor" 
                      className="w-6 h-6">
                      <path stroke-linecap="round" 
                        stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                  </Button> 
                </div>
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
            </>
          } else{
            <div className="flex flex-col md:flex-row flex-1">
              <main className="flex-1">{children}</main>
            </div>
          }
          
        </div>
      </body>
    </html>
  )
}
