'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import EachImage from './eachImage'
import MyHeader from './pageHeader'
import { renderOptions } from '@/lib/formatContent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Trailer from './trailer'

interface infoAboutMe {
    intro: string
    introTitle: string
    gallery: []
    contentIntro: {}
    headline: string
}

export default function AboutMe (props: infoAboutMe) {

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const boxVariants = {
    out: {
      y: 600
    },
    in: {
      y: 0,
      transition: {
        duration: 3,
        // The first child will appear ater the parent has appeared on the screen
        delayChildren: 1.2,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 1.5
      }
    }
  }

  const iconVariants = {
    out: {
      y: 600
    },
    in: {
      y: -500
    }
  }

  const anotherVariant ={
    out: {
      y: -600
    }
  }
  const parsePhotos: Image = []

  props.gallery.map((item) => {
    const itemObject = {
      src: item.fields.file.url,
      width: item.fields.file.details.image.width,
      height: item.fields.file.details.image.height,
      thumbnailCaption: item.fields.title
    }
    parsePhotos.push(itemObject)
  })
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768
    if (!isMobile) {

    }
  }

  return (
      <div className='w-full flex flex-col items-center text-white'>
        {isClient
          ? <motion.div className='flex items-center flex-col w-full max-sm:grid-cols-1'  variants={boxVariants} initial="out" animate="in">
                <motion.div variants={anotherVariant}>
                  <Trailer />
                </motion.div>
                <motion.div variants={iconVariants}>
                <EachImage images={parsePhotos}/>
                </motion.div>
              <motion.div
                  variants={iconVariants}
                  className='xl:px-[25vw] md:px-16 max-sm:px-4'>

                  <MyHeader title={props.headline} subTitle=""/>
                  <br />
                  <motion.div className='md:mx-8 max-sm:mx-10'>
                    {documentToReactComponents( props.contentIntro, renderOptions)}
                  </motion.div>
                  <p className='mt-8 xl:mx-[18vw] md:mx-16 max-sm:mx-4'>
                  <a href='/resume.pdf' target="_blank">
                    <button data-tooltip-target="tooltip" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg  bg-cyan border text-sm" type="button">
                    <div className="flex p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#54808C"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                      </svg>
                        Download my resume
                      </div>
                      </button>
                    </a>
                  </p>
              </motion.div>
          </motion.div>
          : <></>}
      </div>
  )
}
