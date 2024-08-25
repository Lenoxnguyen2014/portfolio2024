import React from 'react'
import { getPerBlogEntry } from '@/utils/callContentful'
import { v4 as uuidv4 } from 'uuid'
import { parseISO, format } from 'date-fns'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderOptions } from '@/lib/formatContent'

type BlogPageProps = {
    params: {
        id: string
    }
}

const Blog = async (props: BlogPageProps) => {
    
  const id = props.params.id
  const blog = await getPerBlogEntry(id)
  const title = blog.items[0].fields.title
  const author = blog.items[0].fields.authorName
  const categoryName = blog.items[0].fields.categoryName
  const date = format(parseISO(blog.items[0].fields.date), 'LLLL d, yyyy')
  const content = blog.items[0].fields.content
  const sum = blog.items[0].fields.sum
  const imgSrc = blog.items[0].fields.thumbnail.fields.file.url

  return (
        <main className="flex flex-col text-primary md:m-16 sm:m-2">
            <div className='flex items-center gap-16 flex-col w-[100%] px-16 max-sm:px-4'>
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">{title} </h1>
                <h3 className='text-xl'>{sum?.toString()}</h3>
                <div className='flex underline'>
                    READ MORE <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#dac5a7"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                </div>
            </div>
        <div className='grid grid-cols-3 gap-8 m-2 max-sm:grid-cols-1 max-sm:gap-2'>
        <div className='border border-teal-700 p-4 flex justify-between'>
            <p>DATE</p> 
            <p>{date}</p>
        </div>
        <div className='border border-teal-700 p-4 flex justify-between'>
            <p>CATEGORY</p>
            <p>{categoryName}</p>
        </div>
        <div className='border border-teal-700 p-4 flex justify-between'>
            <p>READING TIME</p>
            <p>2 mins</p>
        </div>
        </div>
        <figure className="my-8">
                <img className="h-auto w-full" src={imgSrc} />
            </figure>
        <div className="m-32 max-sm:m-0">
            <div>
                {documentToReactComponents(content, renderOptions)}
            </div>
        </div>
        </main>
  )
}

export default Blog
