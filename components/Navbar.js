import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-300 p-2 items-center'>
        <div className='logo text-2xl font-bold'>
            <Link href="/" >BitLinks</Link>
        </div>
        <ul className='flex gap-3 items-center'>
           <Link href="/" > <li className='hover:underline hover:decoration-wavy hover:decoration-gray-500 '>Home</li></Link>
           <Link href="/about" > <li className='hover:underline hover:decoration-wavy hover:decoration-gray-500'>About</li></Link>
           <Link href="/shorten" > <li className='hover:underline hover:decoration-wavy hover:decoration-gray-500'>Shorten</li></Link>
           <Link href="/contact" > <li className='hover:underline hover:decoration-wavy hover:decoration-gray-500'>Contact Us</li></Link>
           <li className='flex gap-3 items-center justify-center'>
            <Link href="/shorten"><button className='bg-sky-300 cursor-pointer hover:underline p-1 font-bold text-sm rounded-lg shadow-lg px-2 border-1 border-sky-800'>Try Now</button></Link>
            <Link href="/github"><button className='bg-sky-300 cursor-pointer hover:underline p-1 font-bold text-sm rounded-lg shadow-lg px-2 border-1 border-sky-800'>GitHub</button></Link>
           </li>
        </ul>
    </nav>
  )
}

export default Navbar
