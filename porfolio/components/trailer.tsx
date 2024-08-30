'use client'

import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Trailer () {
  return (
      <motion.div className='w-full items-center' initial="initial">
      <Image width={500} height={500} alt="lezen logo" src={Logo}/>
      </motion.div>
  )
}
