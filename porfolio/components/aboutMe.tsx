'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import EachImage from './eachImage'
import MyHeader from './pageHeader'
import { renderOptions } from '@/lib/formatContent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface infoAboutMe {
    intro: string
    introTitle: string
    gallery: []
    contentIntro: {}
    headline: string
}

export default function AboutMe (props: infoAboutMe) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end end"]
  })
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

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
      <div ref={ref} className='w-full flex flex-col items-center text-white'>
        {isClient
          ? <motion.div className='flex items-center flex-col w-full max-sm:grid-cols-1'>
              <EachImage images={parsePhotos}/>
              <motion.div
           
                  className='xl:px-[25vw] md:px-16 max-sm:px-4'>
                  <MyHeader title={props.headline} subTitle=""/>
                  <br />
                  <motion.div className='md:mx-8 max-sm:mx-10'>
                    {documentToReactComponents( props.contentIntro, renderOptions)}
                  </motion.div>
              </motion.div>
              <p className='mt-8'>
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
          : <></>}
      </div>
  )
}
