'use client'
import MyHeader from "./pageHeader"
import Link from "next/link"
import { motion } from "framer-motion"

interface RecentProjects {
    recentProjects: []
}
export default function RecentProjects (props: RecentProjects) {
    const listProjects: Array<String> = []
    props.recentProjects.map((item, key) => {
        const itemObject = {
            num: key,
            id: item.fields.id,
            name: item.fields.name,
            tags: item.fields.tags,
            thumbnail: item.fields.featureImage.fields.file.url,
            slug: item.fields.slug
        }
        listProjects.push(itemObject)
    })
    return(
        <div className="mt-24 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            <motion.div className="flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                    type: 'spring',
                    stiffness: 130,
                    mass: 7,
                    damping: 1,
                    duration: 2.5 }}
                >
                <MyHeader title="Recent Projects" subTitle="" />
            </motion.div>
            {listProjects.slice(0,3).map((item, key) => {
                return(
                    <div key={item.slug} className="relative max-w-xl mx-auto max-sm:mx-2 max-md:max-w-sm max-sm:flex max-sm:flex-col max-sm:mx-12">
                    <Link href={`/projects/${item.id}/${item.slug}`}>
                    <img className="h-[450px] w-full object-cover rounded-md max-md:h-[300px]" src={item.thumbnail} width={250}/>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-md hover:opacity-0 "></div>
                      <div className="absolute bottom-10 right-5 left-5 flex items-center justify-center">
                        <div className="border-cyan-500 flex justify-between border w-full p-4 bg-black/30 backdrop-blur-lg text-primary ">
                          <h2 className='text-xl'>{item.name} </h2>
                          <h4>{item.tags} </h4>
                          </div>
                      </div>
                    </Link>
                  </div>
                )
            })}

        </div>
    )
}