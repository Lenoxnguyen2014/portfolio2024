import React from 'react'
import { getPerBlogEntry } from '@/utils/callContentful'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

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
  const imgSrc = blog.items[0].fields.thumbnail.fields.file.url
  const content = blog.items[0].fields.content.content[0].content[0].value

  return (
        <main className="flex flex-col sm:md:flex sm:m-20 sm:pb-16 sm:lg:pt-16 sm:lg:pb-24 rounded-lg bg-gray-300  ">
        <div className='flex flex-row'>
            <figure className="sm:pt-5 pt-20 sm:pl-10 pl-5 sm:max-w-lg max-w-80 ml-8">
                <img className="h-auto sm:max-w-lg max-w-80 rounded-lg" src={imgSrc} />
            </figure>
            <div>
                <h1 className="m-24 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{title} </h1>

            </div>
        </div>
        <div className="sm:p-20 p-5">
            <div className="rounded-lg bg-gray-200 p-2 w-30 border">
            <p>{author} </p>
            <p>{categoryName}</p>
            </div>
            <br/>
            <p>
            {
                blog.items[0].fields.content.content.map((i) => {
                  const id = uuidv4()
                  if (i.nodeType == 'paragraph') {
                    return (
                        <div key={id}>
                            <p>{i.content[0].value}</p>
                            <br />
                        </div>
                    )
                  } else if (i.nodeType == 'embedded-asset-block') {
                    const imagelink = i.data.target.fields.file.url
                    return (
                        <div key={id + 'photo'}>
                            <img src={imagelink} />
                            <br/>
                        </div>
                    )
                  }
                })
            }
            </p>
        </div>
        </main>
  )
}

export default Blog
