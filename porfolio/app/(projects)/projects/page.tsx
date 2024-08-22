import React from 'react'
import Link from 'next/link'
import { getAllProjectEntry } from '@/utils/callContentful'

const MyProjects = async () => {
  const projects = await getAllProjectEntry()
  return (
        <main className="grid grid-cols-2 gap-4 m-32 max-sm:grid-cols-1 max-sm:mx-2 max-sm:block ">
        {projects.items.map((singlePost) => {
          const { id, slug, name, featureImage } = singlePost.fields
          const thumbnailLink = `https:${featureImage.fields.file.url}`
          return (
            <div key={slug} className="relative max-w-xl mx-auto mt-20">
              <Link href={`/projects/${id}/${slug}`}>
              <img className="h-[500px] w-full object-cover rounded-md" src={thumbnailLink} width={250}/>
              <div className="absolute inset-0 bg-black opacity-40 rounded-md hover:opacity-0 "></div>
                <div className="absolute bottom-10 right-5 left-5 flex items-center justify-center">
                  <h2 className="border-slate-200 text-xl w-full p-4 bg-black/30 backdrop-blur-lg text-white ">{name}</h2>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
  )
}

export default MyProjects
