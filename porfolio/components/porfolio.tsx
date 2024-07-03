'use client'

import React from 'react'
import { motion } from 'framer-motion'
import lezenio from '../src/lezenio.svg'
import Image from 'next/image'

export default function Porfolio () {
  return (
    <div>
    <motion.div
      className='flex items-center w-full h-full 1/2 bg-cyan-900'
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        delay: 1
      }}
    >
      <Image width={500} height={500} alt="lezen logo" src={lezenio}/>
    </motion.div>
    </div>
  )
}
