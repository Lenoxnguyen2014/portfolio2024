import Link  from "next/link"

const MyYoutube = ({ children }) => {
    return (
        <div>
            <div className="bg-gray-300 p-20 sm:flex gap-10 block">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">YOUNG AND HUNGRY</span> WELCOME TO MY CHANNEL</h1>
            <Link href={"https://www.youtube.com/channel/UCeuYjQ_8Pm1kY4t16pCjbPQ"} target={"_blank"}>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Subscribe me</button>            
            </Link>
            </div>
            { children }
        </div>
    )
}

export default MyYoutube