import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '../constants'
// import Button from './Button'

const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container z-30 py-2 sticky top-0 bg-gray-10'>
        <Link href='/'>
        <Image src='/ecoflowlogo.png' alt='logo' width={154} height={89}/>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) =>(
             <Link href={link.href} key={link.key} className='text-blue-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                {link.label}
             </Link>   
            ))}

        </ul>
        {/* <div className='lg:flexCenter hidden'> */}
          {/* <Button type={'button'} title={'Login'} variant={'btn_dark_green'} icon={'/user.svg'}/> */}
        {/* </div> */}
        <Image src='hamburger.svg' alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden' />
    </nav>
  )
}

export default Navbar