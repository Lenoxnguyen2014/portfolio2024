'use client'

import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'

export default function Loading () {
  return (
      <div className='w-full h-screen items-center ml-[36vw]'>
      <Image width={500} height={500} alt="lezen logo" src={Logo}/>
      </div>
  )
}
