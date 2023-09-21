import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className='fixed left-[50%] translate-x-[-50%] z-50 mt-4 mb-8 md:mb-12 xl:mb-16 text-zinc-100'>
        <ul className='bg-zinc-800 rounded-3xl py-2 px-8 border border-zinc-600 flex flex-row gap-8'>
            <li>
                <Link href="/#home" className='hover:text-teal-500 ease-in duration-75'>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/#projects" className='hover:text-teal-500 ease-in duration-75'>
                    Projects
                </Link>
            </li>
            <li>
                <a href="https://github.com/Matteo-DP" target="_blank" rel="noreferrer" className='hover:text-teal-500 ease-in duration-75'>
                    GitHub
                </a>
            </li>
        </ul>
    </nav>
  )
}