import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { getAllBlogsEntries } from '@/utils/callContentful'

const MyBlogs = async () => {
  const blogs = await getAllBlogsEntries()
  return (
        <main className="grid grid-cols-2 gap-4 m-32 max-sm:grid-cols-1 max-sm:m-2">
        {blogs.items.map((singlePost) => {
          const { id, slug, title, date, thumbnail, authorName, categoryName } = singlePost.fields
          const thumbnailLink = `https:${thumbnail.fields.file.url}`
          return (
            <div key={slug} className="block w-full/2 max-w xl:p-2 p-4 sm:m-10 rounded-lg shadow hover:bg-cyan-700 bg-cyan-900 text-white max-sm:mb-16 max-sm:mx-4" id="blogs">
              <Link href={`/blogs/${id}/${slug}`}>
              <img className="flex w-full" src={thumbnailLink} width={250}/>
                <div>
                  <h2 className="font-bold text-xl">{title}</h2>
                  <p>By {authorName}</p>
                  <p>Category: {categoryName}</p>
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

export default MyBlogs
