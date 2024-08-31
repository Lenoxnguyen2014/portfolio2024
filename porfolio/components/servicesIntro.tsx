'use client'

import { useEffect, useState } from "react"
import { renderOptions } from '@/lib/formatContent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface introServices {
    introServices: []
}
export default function ServicesIntro (props: introServices) {
    const listServices:Array<string> = []
    
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])
    
    props.introServices.map((item, key) => {
        const itemObject = {
            num: key,
            name: item.fields.name,
            intro: item.fields.intro
        }
        listServices.push(itemObject)
    })
    return (
        <div className="grid grid-cols-3 gap-2 mt-24">
            {isClient ? 
            <>
                {listServices.reverse().map((item, key) => {
                return(
                    <div key={key} className="border border-secondary w-[400px] h-[280px] p-6 ">
                        <h2 className="bold text-2xl text-secondary mb-4">{item.name}</h2>
                        <p className="text-primary mt-12 font-sans text-xl">{documentToReactComponents( item.intro, renderOptions)}</p>
                    </div>
                )
            })}
            </> : <></>}

        </div>
    )
}