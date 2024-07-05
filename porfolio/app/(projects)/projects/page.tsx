import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { getAllProjectEntry } from '@/utils/callContentful'

const MyProjects = async () => {
  const projects = await getAllProjectEntry()
  return (
        <main className="grid grid-cols-2 gap-4 m-32">
        {projects.items.map((singlePost) => {
          const { id, slug, name, date, featureImage } = singlePost.fields
          const thumbnailLink = `https:${featureImage.fields.file.url}`
          return (
            <div key={slug} className="block w-full/2 max-w xl:p-2 p-4 sm:m-10 rounded-lg shadow hover:bg-cyan-700 bg-cyan-900 text-white">
              <Link href={`/projects/${id}/${slug}`}>
              <img className="flex w-full" src={thumbnailLink} width={250}/>
                <div>
                  <h2 className="font-bold text-xl">{name}</h2>
                  <span>
                    Posted on {formatDate(date)}
                  </span>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
  )
}

export default MyProjects
