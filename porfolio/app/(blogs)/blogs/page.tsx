import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { getAllBlogsEntries } from '@/utils/callContentful'

const MyBlogs = async () => {
  const blogs = await getAllBlogsEntries()
  return (
        <main className="grid xl:grid-cols-3 gap-4 max-xl:mx-48 max-lg:mx-8 max-sm:grid-cols-1 max-md:m-2 max-lg:grid-cols-2 max-md:m-8">
        {blogs.items.map((singlePost) => {
          const { id, slug, title, date, thumbnail, authorName, categoryName, sum } = singlePost.fields
          const thumbnailLink = `https:${thumbnail.fields.file.url}`
          return (
            <div key={slug} className="block w-full/2 h-[70&] max-w xl:p-12 p-4 sm:m-10 rounded-lg shadow hover:bg-cyan-700 bg-cyan-900/40 text-white max-sm:mb-16 max-sm:mx-4 " id="blogs">
              <Link href={`/blogs/${id}/${slug}`}>
              <img className="w-full object-cover rounded-md" src={thumbnailLink} width={250}/>
                <div>
                  <br/>
                <span>
                    {formatDate(date)}
                  </span>
                  <p className='border p-2 w-16 '> {categoryName.toLowerCase()}</p>
                  <h2 className="text-lg text-amber-300">{title}</h2>
                  <p className="text-ellipsis overflow-hidden "> {sum} </p>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
  )
}

export default MyBlogs
