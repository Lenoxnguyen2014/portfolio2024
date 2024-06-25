'use client'
import React from 'react'
import Link from 'next/link'
import Logo from '../src/logo-lezen.png'
import Image from 'next/image'
import { useState } from 'react'

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const showMenu = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/myyoutube', label: 'My Youtube' }
  ]
  return (
      <nav className={'bg-black border-gray-200 ' + (hamburgerOpen ? 'bg-black overscroll-y-none z-index: 10' : 'background-color: none')} >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-36 w-36"/>
        </Link>
        <button onClick={showMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={'w-screen relative max-sm:static z-10 max-sm:bg-black sm:flex sm:items-center sm:w-auto max-sm:h-screen max-sm:m-36' + (hamburgerOpen ? 'flex' : 'hidden')}>
        <ul className="sm:flex sm:space-x-4 max-sm:space-y-16">
        {links.map(({ href, label }) => (
              <li key={href} className="text-sm md:text-xl font-bold text-white pt-2">
                <Link className="active:bg-sky-100" href={href} >{label}</Link>
              </li>
        ))}
            <li><button className="bg-cyan-900 hover:bg-cyan-700 text-white font-bold p-2 rounded">Buy Me a coffee</button></li>
          </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
