'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../public/logo.png'
// import LogoSvg from '../src/lezenio.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const showMenu = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  const pathname = usePathname()

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/myyoutube', label: 'My Youtube' }
  ]
  return (
      <nav className='bg-dark border-gray-200 '>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/">
          <Image src={Logo} alt="logo" className="h-36 w-36"/>
        </a>
        <button onClick={showMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <motion.div className={'w-screen relative max-sm:static z-10 max-sm:bg-dark sm:flex sm:items-center sm:w-auto max-sm:h-screen max-sm:m-24 max-sm:text-lg' + (hamburgerOpen ? ' flex' : ' hidden')}>
        <ul className="sm:flex sm:space-x-4 max-sm:space-y-16 max-sm:w-full">
        {links.map(({ href, label }) => (
              <li key={href} className="text-sm md:text-xl font-bold text-primary pt-2 max-sm:text-lg">
                <a className={`inline-flex px-3 py-1.5 white hover:text-cyan-500 [&.active]:underline decoration-cyan-400 [&.active]:text-primary ${pathname === `${href}` ? 'active' : ''}`} href={href}>{label}</a>
              </li>
        ))}
            <li><a href="https://www.buymeacoffee.com/lezen"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=lezen&button_colour=164e63&font_colour=ffffff&font_family=Arial&outline_colour=ffffff&coffee_colour=FFDD00" /></a></li>
          </ul>
          </motion.div>
        </div>
      </nav>
  )
}

export default NavBar
