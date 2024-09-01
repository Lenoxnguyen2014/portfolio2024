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
    console.log(listProcess)
    const sortedProcessList = listProcess.sort((a, b) => (a.step > b.step) ? 1 : -1)
    return (
        <div className="mt-24 flex items-center flex-col w-full h-auto ">
            <div className="flex items-center justify-center md:mx-8">
                <h1 className="text-3xl font-extrabold text-white-100 text-primary md:text-5xl lg:text-6xl max-sm:mx-10 max-sm:my-0 italic underline">
                        Your Website in 5 steps

                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    </span>
                </h1>
            </div>
            <div className="mt-24 grid grid-cols-2 gap-2 max-md:grid-cols-1">
                {sortedProcessList.map((item, key) => {
                    if (item.step %2 == 0) {
                        return(
                            <div className="w-[500px] mt-[24rem] ml-[-64px] py-8 text-primary max-sm:w-96 max-sm:block">
                                <div className="border w-16 h-16 p-6 rounded-full flex items-center border-secondary bg-slate-700">
                                    {item.step}
                                <div className="border border-dashed border-slate-700 h-[600px] opacity-90"></div>
                                </div>
                                <div className=" w-full p-6 ml-[72px] mt-[-30px] border border-secondary">
                                        <h2 className="text-lg bold">{item.title}</h2>
                                        <h4 className="text-2xl">{item.subTitle}</h4>
                                        <p className="mt-4">
                                            { documentToReactComponents(item.describeStep, renderOptions) }
                                        </p>
                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <div className="w-[500px] h-64 py-8 mr-16 text-primary max-sm:w-96 max-sm:block">
                                <div className="border w-16 h-16 p-6 float-right mr-[-72px] rounded-full flex items-center border-secondary max-md:ml-[-72px] max-md:float-left">
                                    {item.step}
                                </div>
                                <div className="w-full p-8 mt-6 border border-secondary">
                                    <h4 className="text-lg bold">{item.title}</h4>
                                    <h2 className="text-2xl">{item.subTitle}</h2>
                                    <p className="mt-4">
                                        { documentToReactComponents(item.describeStep, renderOptions) }
                                    </p>
                                </div>

                            </div>

                        )
                        
                    }})
                }
            </div>
        </div>

    )
}