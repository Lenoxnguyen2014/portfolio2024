'use client'

import { useEffect, useState } from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderOptions } from '@/lib/formatContent'

interface processIntro {
    processIntro: []
}

export default function ProcessIntro (props: processIntro) {
    const listProcess:Array<Object> = []
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])

    props.processIntro.map((item, key) => {
        const itemObject = {
            step: parseInt(item.fields.stepNum),
            describeStep: item.fields.describeStep,
            title: item.fields.title,
            subTitle: item.fields.subTitle
        }
        listProcess.push(itemObject)
    })

    const sortedProcessList = listProcess.sort((a, b) => (a.step > b.step) ? 1 : -1)
    const rightProcessList = sortedProcessList.filter((item) => item.step % 2 == 0)
    const leftProcecssList = sortedProcessList.filter((item) => item.step %2 != 0)
    return (
        <div className="mt-24 flex items-center flex-col w-full h-auto ">
            <div className="flex items-center justify-center md:mx-8">
                <h1 className="text-3xl font-extrabold text-white-100 text-primary md:text-5xl lg:text-6xl max-sm:mx-10 max-sm:my-0 italic underline">
                        Your Website in 5 steps

                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    </span>
                </h1>
            </div>
            <div className="mt-24 grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                {sortedProcessList.map((item, key) => {
                    if (item.step %2 == 0) {
                        return(
                            <div className="w-[500px] mt-[24rem] ml-[-64px] py-8 text-primary ">
                                <div className="border w-16 h-16 p-6 rounded-full flex items-center border-secondary">
                                    {item.step}
                                <div className="border border-dashed border-slate-700 h-[600px] opacity-90"></div>
                                </div>
                                <div className=" w-full p-6 ml-20 mt-[-16px] border border-secondary">
                                        {item.title}
                                        { documentToReactComponents(item.describeStep, renderOptions) }
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className="w-[500px] h-64 py-8 mr-16 text-primary">
                                <div className="border w-16 h-16 p-6 float-right mr-[-72px] rounded-full flex items-center border-secondary">
                                    {item.step}
                                </div>
                                <div className="w-full p-8 mt-8 border border-secondary">
                                        {item.title}
                                        { documentToReactComponents(item.describeStep, renderOptions) }
                                </div>

                            </div>

                        )
                        
                    }})
                }
            </div>
        </div>

    )
}