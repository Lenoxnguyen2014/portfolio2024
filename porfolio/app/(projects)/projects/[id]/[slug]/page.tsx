import React from 'react'
import { getPerProjectEntry } from '@/utils/callContentful'
import EachImage from '@/components/eachImage'
import Image from 'next/image'
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
  const featureImage = project.items[0].fields.featureImage.fields.file.url
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
        <main className="flex flex-row m-36 mx-48 rounded-lg text-white ">
            <div className='text-white w-1/2'>
            <h1 className="text-3xl md:text-4xl font-medium mb-2 bg-cyan-900"> {title} </h1>
                <br />
                <p>{description}</p>
                <br />
                    <h4 className='text-xl'>Project: <Link className="underline white"href={link}>Link </Link></h4>

            </div>
            <div className='w-1/2 items-center'>
            { parsePhotos.length > 1 ? <EachImage images={parsePhotos} /> : <img className='w-full' src={featureImage} width={300} height={300} alt="Picture of the dev"/>
}
            </div>
        </main>
  )
}

export default Project