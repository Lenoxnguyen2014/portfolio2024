import React from 'react'
import { getPerProjectEntry } from '@/utils/callContentful'
import EachImage from '@/components/eachImage'
import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'


type ProjectPageProps = {
    params: {
        id: string
    }
}


const Project = async (props: ProjectPageProps) => {
  const id = props.params.id
  const project = await getPerProjectEntry(id)
  const title = project.items[0].fields.name
  const featureImage = project.items[0].fields.featureImage.fields.file.url
  const description = project.items[0].fields.description
  const categoryName = project.items[0].fields.tags
  const date = format(parseISO(project.items[0].fields.date), 'LLLL d, yyyy')
  const parsePhotos: Image = []
  const link = project.items[0].fields.github_link
  project.items[0].fields.gallery.map((item) => {
    const itemObject = {
      src: item.fields.file.url,
      width: item.fields.file.details.image.width,
      height: item.fields.file.details.image.height,
      thumbnailCaption: item.fields.title
    }
    parsePhotos.push(itemObject)
  })

  return (
        <main className="flex flex-col text-primary md:m-16 sm:m-2">
            <div className='flex items-center flex-col w-[100%] max-sm:px-4 text-primary'>
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-primary">{title}</h1>
                <h3 className='text-xl my-8'>{description?.toString()}</h3>
                <div className='flex items-center underline mb-8'>
                    MORE DETAILS  &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#dac5a7"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-2'>
              <div className='border border-teal-700 p-4 flex flex-cols justify-between'>
                <p>DATE</p> 
                <p>{date}</p>
              </div>
              <div className='border border-teal-700 p-4 flex flex-cols justify-between'>
                <p>CATEGORY</p>
                <p>{categoryName}</p>
              </div>
              <div className='border border-teal-700 p-4 flex flex-cols justify-between'>
                <p>WEBSITE</p>
                <a href={link} className='underline'>link</a>
              </div>
            </div>
            <figure className="my-8">
                <img className="h-auto w-full" src={featureImage} />
            </figure>
            <div className="max-sm:m-0 w-full grid grid-cols-2">
              <div className='items-center max-sm:w-full'>
                { parsePhotos.length > 1 ?
                  <div>
                    <h3 className='text-2xl bold'>GALLERY</h3>
                    <EachImage images={parsePhotos} /> 
                  </div>
                  : 
                <></>}
              </div>
            </div>
        </main>
  )
}

export default Project