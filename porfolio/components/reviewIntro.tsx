'use client'

import { useEffect, useState } from "react"
import { renderOptions } from '@/lib/formatContent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface introReviews {
    introReviews: []
}

export default function ReviewsIntro (props: introReviews) {
    const listReviews:Array<string> = []
    
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])
    props.introReviews.map((item, key) => {
        const itemObject = {
            num: key,
            name: item.fields.clientName,
            review: item.fields.clientReview,
            logo: item.fields.logo.fields.file.url
        }
        listReviews.push(itemObject)
    })
    return(
        
        <div className="mt-72 flex items-center flex-col w-full h-auto ">
            <div className="flex flex-col items-center justify-center md:mx-8">
                <h1 className="text-3xl font-extrabold text-white-100 text-primary md:text-5xl lg:text-6xl max-sm:mx-10 max-sm:my-0 italic">
                        What my clients say
                </h1>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-xl">
                    See what my clients have to say about working with me and have results I helped them achieve
                </h3>
            </div>
            <div  className="flex flex-cols space-x-8 items-center text-primary md:flex flex-cols flex-wrap max-sm:block mt-24">
                {listReviews.map((item, key) => {
                    return(
                        <div key={key} className="w-[600px] border  border-secondary h-[400px] p-12 shadow-teal-600 shadow-lg">
                            <h2 className="mb-4 bold text-2xl ">{item.name}</h2>
                            <div className="mb-4 h-[180px]">{documentToReactComponents(item.review, renderOptions)}</div>
                            <div className="h-24 w-24 border-2 p-2 border-primary">
                                <img className="h-full w-full" src={item.logo} alt="logo"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}