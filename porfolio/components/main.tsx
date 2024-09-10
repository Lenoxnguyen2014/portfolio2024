'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import EachImage from './eachImage'
import MyHeader from './pageHeader'
import Image from 'next/image'
import More from '../public/more.png'
import Trailer from './trailer'
import ServicesIntro from './servicesIntro'
import RecentProjects from './recentProject'
import ProcessIntro from './processIntro'
import ReviewsIntro from './reviewIntro'
import AboutMe from './aboutMe'
import myFace from "../public/my_profile_bg_black_processed.png"

interface Main {
    intro: string
    introTitle: string
    punchline: string
    contentIntro: {}
    gallery: []
    headline: string
    introServices: []
    recentProjects:[]
    introProcess: []
    introReviews: []
}

export default function Main (props: infoAboutMe) {
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


  return (
      <div className='w-full flex flex-col items-center text-white'>
        {isClient
          ? <motion.div className='flex items-center flex-col w-full max-sm:grid-cols-1'  variants={boxVariants} initial="out" animate="in">
                <motion.div variants={anotherVariant}>
                  <Trailer />
                </motion.div>
                <motion.div className='flex flex-col items-center my-8' variants={iconVariants}>
                  <Image width={500} height={400} src={myFace} alt="my_profile" />
                  <motion.div
                   initial={{ opacity: 0, y: -300 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   animate={{y: -200}}
                   transition={{ease: "easeIn", duration: 2}}
                    className='xl:px-[18vw] md:px-16 max-sm:px-4'>

                    <MyHeader title={props.headline} subTitle=""/>
                    <br />

                  </motion.div>
                  <ServicesIntro introServices={props.introServices}/>
                  <RecentProjects recentProjects={props.recentProjects}/>
                  <ProcessIntro processIntro={props.introProcess} />
                  <ReviewsIntro introReviews={props.introReviews}/>
                  <AboutMe contentIntro={props.contentIntro} punchline={props.punchline} intro={props.intro}/> 
                </motion.div> 

          </motion.div>
          : <></>}
      </div>
  )
}
