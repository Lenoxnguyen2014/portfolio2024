'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import EachImage from './eachImage'
import myProfile from '../src/my_profile.jpg'
import MyHeader from './pageHeader'

interface infoAboutMe {
    intro: string | null
    introTitle: string | null
    gallery: []
    contentIntro: [] | null
    headline: string | null
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
  let galleryBox = {}
  let introBox = {}
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
  const parseContentIntro = []
  props.contentIntro.map((item) => {
    const content = item.content[0].value.split('')
    parseContentIntro.push(content)
  })
  return (
      <div ref={ref} className='w-full flex flex-col items-center text-white sm:mx-8'>
        {isClient
          ? <motion.div className='flex items-center flex-col w-full max-sm:grid-cols-1'>
              <EachImage images={parsePhotos}/>
              <motion.div
                  variants={introBox}
                  initial="hidden"
                  animate="visible"
                  transition= {{ ease: 'easeOut', duration: 2 }}
                  className='px-[19.5vw] max-sm:px-4'
              >
                  <MyHeader title={props.headline} subTitle=""/>
                  <br />
                  {parseContentIntro.map((el, i) => (
                  <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 20
                  }}
                  key={i}
                  >
                  {el}{' '}
                  </motion.span>
                  ))}
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
