import React from 'react'
import Link from 'next/link'

interface MyPageHeader {
    subLink?: string
    linkTitle?: string
    title: string
    subTitle: string
}

const MyHeader = (props: MyPageHeader) => {
  return (
        <div className="flex items-center justify-center ">
            <h1 className="text-3xl font-extrabold text-gray-900 text-white md:text-5xl lg:text-6xl max-sm:mx-10 max-sm:my-0"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.title}</span> {props.subTitle}</h1>
                {props.subLink &&
                    <Link href={props.subLink} target={'_blank'}>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{props.linkTitle}</button>
                    </Link>
                }
            
        </div>
  )
}

export default MyHeader
