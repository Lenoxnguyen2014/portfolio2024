'use client'

import { renderOptions } from "@/lib/formatContent"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { animate, motion } from "framer-motion"
import myFace from "../public/my_profile_bg_black_processed.png"
import Image from "next/image"
import MyHeader from "./pageHeader"
import { useEffect, useState } from "react"
import { Transition } from "@react-spring/web"

interface aboutMe {
    punchline: {}
    contentIntro: {}
    intro: string
}
export default function AboutMe (props: aboutMe) {
    const [isClient, setIsClient] = useState(false)
    let displayVariant = {}
    useEffect(() => {
      setIsClient(true)
    }, [])
    if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 768
        if (!isMobile) {
            displayVariant = {
                animate: {
                    x: -20
                },
                transition : {
                    ease: "easeOut",
                    duration: 2
                },

            }
        }
      }
    return(
        <div className="mt-24 flex items-center flex-col h-auto">
            <div className="flex items-center max-sm:flex-col">
            <motion.div className="w-[400px] bold text-2xl text-primary max-sm:w-[300px]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            variants={displayVariant}>

                {documentToReactComponents(props.contentIntro, renderOptions)}
            </motion.div>
            <div className="flex items-center ">
                <Image width={500} height={400} src={myFace} alt="my_profile" />
            </div>
            <motion.div className="bold text-2xl text-primary w-[500px] max-sm:mt-12"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        animate={{x:40}}
                                        transition={{ease: "easeOut", duration: 2}}
            >
                <MyHeader className="h-[400px]" title={props.intro} subTitle={documentToReactComponents(props.punchline, renderOptions)}/>
                
            </motion.div>
            </div>


        </div>
    )
}