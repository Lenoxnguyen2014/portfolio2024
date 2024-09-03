'use client'

import { renderOptions } from "@/lib/formatContent"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from "framer-motion"
import myFace from "../public/my_profile_bg_black_processed.png"
import Image from "next/image"
import MyHeader from "./pageHeader"

interface aboutMe {
    punchline: {}
    contentIntro: {}
    intro: string
}
export default function AboutMe (props: aboutMe) {
    return(
        <div className="mt-24 flex items-center flex-col h-auto">
            <div className="flex items-center">
            <motion.div className="w-[400px] bold text-2xl text-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            animate={{x: -20}}
                            transition={{ease: "easeOut", duration: 2}}>

                {documentToReactComponents(props.contentIntro, renderOptions)}
            </motion.div>
            <div className="flex items-center ">
                <Image width={500} height={400} src={myFace} alt="my_profile" />
            </div>
            <motion.div className="bold text-2xl text-primary w-[500px]"
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