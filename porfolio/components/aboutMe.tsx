'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import EachImage from './eachImage'
import MyHeader from './pageHeader'
import Image from 'next/image'
import MyProfile from '../public/my_profile.jpg'
import More from '../public/more.png'
import { renderOptions } from '@/lib/formatContent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Trailer from './trailer'
import ServicesIntro from './servicesIntro'
import RecentProjects from './recentProject'

interface infoAboutMe {
    intro: string
    introTitle: string
    gallery: []
    contentIntro: {}
    headline: string
    introServices: []
    recentProjects:[]
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
        duration: 1.5,
        // The first child will appear ater the parent has appeared on the screen
        delayChildren: 1,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5
      }
    }
  }

  const iconVariants = {
    out: {
      y: 500
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
                <motion.div className='flex flex-col items-center my-8' variants={iconVariants}>
                  <EachImage images={parsePhotos}/>
                  <div
                    className='xl:px-[25vw] md:px-16 max-sm:px-4'>

                    <MyHeader title={props.headline} subTitle=""/>
                    <br />
                    <motion.div className='md:mx-8 max-sm:mx-10'>
                      {documentToReactComponents( props.contentIntro, renderOptions)}
                    </motion.div>
                    <div className='mt-8 xl:mx-[20vw] md:mx-16 max-sm:ml-10'>
                      <button className='flex items-center flex-row text-primary underline'>
                        <Image width={20} src={More} alt="more" />
                        <p className='bold text-lg ml-2'>MY SERVICES</p>
                      </button>
                    </div>
                  </div>
                  <ServicesIntro introServices={props.introServices}/>
                  <RecentProjects recentProjects={props.recentProjects}/>
                </motion.div>

          </motion.div>
          : <></>}
      </div>
  )
}
