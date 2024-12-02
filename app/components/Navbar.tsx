'use client'
import Link from 'next/link'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import React, { useState } from 'react'
import { NAV_LINKS } from '../constants'
// import Button from './Button'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=' flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-green-100'>
        <Link href='/'>
        <Image src='/ecoflowlogo.png' alt='logo' width={154} height={89}/>
        </Link>
        <nav className='hidden sm:flex justify-between items-center gap-4 font-semibold'>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) =>(
             <Link href={link.href} key={link.key} className='text-blue-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                {link.label}
             </Link>   
            ))}

        </ul>
    </nav>
    <nav className="md:hidden flex flex-col items-end gap-1 font-semibold">
    <button onClick={() => setShowMenu(!showMenu)}
          className="md:hidden font-bold text-xl hover:text-green-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
          <ul className='md:hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) =>(
             <Link href={link.href} key={link.key} className='text-blue-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                {link.label}
             </Link>   
            ))}

        </ul>
          </>
        )}
    </nav>
    </header>
  )
}

export default Navbar