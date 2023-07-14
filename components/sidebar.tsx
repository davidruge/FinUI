import Link from 'next/link'
import Image from 'next/image'

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
  

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar