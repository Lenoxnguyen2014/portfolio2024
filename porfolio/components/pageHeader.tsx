import Link  from "next/link"

interface MyPageHeader {
    subLink?: string
    linkTitle?: string
    title: string
    subTitle: string
}

const MyHeader = (props: MyPageHeader) => {
    return (
        <div className="bg-gray-100/80 mb-64 p-20 sm:flex gap-10 block">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.title}</span> {props.subTitle}</h1>
                {props.subLink &&
                    <Link href={props.subLink} target={"_blank"}>
                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{props.linkTitle}</button>            
                    </Link>
                }
  
        </div>
    )
}

export default MyHeader