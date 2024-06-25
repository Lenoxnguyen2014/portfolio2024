import React from 'react'
import { callYoutubeAPI } from '@/utils/callYoutube'
import Link from 'next/link'

const MyYoutube = async () => {
  const videoItems = await callYoutubeAPI()
  return (
        <main className="h-screen sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 sm:content-start sm:mt-10 block">
            {videoItems.items.map((singleVideo) => {
              const title = singleVideo.snippet.title
              const videoId = singleVideo.id.videoId
              const thumbnailMedium = singleVideo.snippet.thumbnails.high.url
              return (
                    <div key={title} className="block max-w-sm sm:m-10 m-10 mt-20 bg-cyan-900 rounded-lg shadow hover:bg-cyan-700">
                        <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className="block m-5">
                        <figure className="max-w-lg">
                            <img className="h-auto max-w-full rounded-lg" src={thumbnailMedium}/>
                        </figure>
                        <h5 className="mb-2 text-md font-bold tracking-tight text-white flex">{title}</h5>
                        </Link>
                    </div>
              )
            })}
        </main>
  )
}

export default MyYoutube
