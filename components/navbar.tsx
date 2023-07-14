import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header
        className="bg-purple-200 sticky top-0 h-14 flex justify-space-between items-center font-semibold flow-root"
        >
        <div className='flex float-left items-center mt-0'>
            <Link  href='/'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 mr-2 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </Link> 
            <Link href='/'>
            <Image
                src="/logos/logo_blue_circle.png"
                alt="Vercel Logo"
                className="dark:invert mr-4"
                width={50}
                height={24}
                priority
            />
            </Link>
            <div className='text-2xl dark:invert'>Yaape Company LTD</div>
        </div>

        <div className='flex float-right items-center mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-xl ml-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className='ml-3'>
                <div className='text-base -mb-7'>David Rugeihyamu</div><br/>
                <div className='text-sm'>Senior Data Engineer</div>
            </div>

            <Link  href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 ml-5 mr-5">
                <path stroke-linecap="round" 
                stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            </Link> 
        </div>
        </header>
  )
}

export default Navbar