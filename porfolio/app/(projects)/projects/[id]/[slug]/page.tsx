import React from 'react'
import { getPerProjectEntry } from '@/utils/callContentful'
import EachImage from '@/components/eachImage'
import Link from 'next/link'

type ProjectPageProps = {
    params: {
        id: string
    }
}


const Project = async (props: ProjectPageProps) => {
  const id = props.params.id
  const project = await getPerProjectEntry(id)
  const title = project.items[0].fields.name
  const description = project.items[0].fields.description
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
        <main className="flex flex-row sm:md:flex sm:m-20 sm:pb-16 sm:lg:pt-16 sm:lg:pb-24 rounded-lg text-white ">
            <div className='text-white w-min-md'>
            <h1 className="text-3xl md:text-4xl font-medium mb-2 bg-cyan-900"> {title} </h1>
                <br />
                {description}
                <div className=''>
                <br />
                    <h4 className='text-xl'>Project: <Link className="underline white"href={link}>Link </Link></h4>
                </div>

            </div>
            <div className='w-full'>
            <EachImage images={parsePhotos}/>
            </div>
        </main>
  )
}

export default Project