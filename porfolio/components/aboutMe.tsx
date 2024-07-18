'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
      galleryBox = {
        visible: { opacity: 1, x: '10%' },
        hidden: { opacity: 0, x: -100 }
      }
      introBox = {
        visible: { opacity: 1, x: '-10%' },
        hidden: { opacity: 0, x: -100 }
      }
    }
  }
  const parseContentIntro = []
  props.contentIntro.map((item) => {
    const content = item.content[0].value.split('')
    parseContentIntro.push(content)
  })
  return (
      <div className=' mx-24 flex flex-col items-center text-white max-sm:mx-0'>
        {isClient
          ? <div className='grid grid-cols-2 w-full max-sm:grid-cols-1'>
              <motion.div className="w-full max-w-md bg-white border border-cyan-200 rounded-lg shadow"
                variants={galleryBox}
                initial="hidden"
                animate="visible"
                transition= {{ ease: 'easeOut', duration: 2 }}

              >
                  <div className="flex justify-end px-4 pt-4">
                  <a href='/resume.pdf' target="_blank">
                  <button data-tooltip-target="tooltip" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#54808C"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                      </button>
                      <div id="tooltip" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          Tooltip content
                      <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                  </a>
                  </div>
                  <div className="flex flex-col items-center pb-10">
          <Image className='w-36 h-36 rounded-full shadow-lg' src={myProfile} width={300} height={300} alt="Picture of the dev"/>
              <h5 className="mb-1 text-xl font-medium text-cyan-700 ">{props.intro}</h5>
              <span className="text-sm text-cyan-700">{props.introTitle}</span>
              <div className="flex mt-4 md:mt-6">
                  <a href="https://www.linkedin.com/in/le-nguyen-506048125/" target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-cyan-300" rel="noreferrer">Add Friend</a>
                  <a href="https://www.linkedin.com/in/le-nguyen-506048125/" target='_blank' className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-cyan-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-100" rel="noreferrer">Message</a>
              </div>
                  </div>
                  <EachImage images={parsePhotos}/>
              </motion.div>
              <motion.div
                  variants={introBox}
                  initial="hidden"
                  animate="visible"
                  transition= {{ ease: 'easeOut', duration: 2 }}
                  className='p-8'
              >
                  <MyHeader title={props.headline} subTitle=""/>
                  <br />
                  {parseContentIntro.map((el, i) => (
                  <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10
                  }}
                  key={i}
                  >
                  {el}{' '}
                  </motion.span>
                  ))}
              </motion.div>
          </div>
          : <></>}
      </div>
  )
}
