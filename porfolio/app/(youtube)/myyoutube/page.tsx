import React from 'react'
import { callYoutubeAPI } from '@/utils/callYoutube'
import playCircle from '@/public/play_circle.svg'
import Link from 'next/link'

const MyYoutube = async () => {
  const videoItems = await callYoutubeAPI()
  return (
        <main className="sm:grid sm:grid-cols-1 sm:mx-0 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 sm:gap-2 sm:content-start sm:mt-10 block">
            {videoItems.items.map((singleVideo) => {
              const title = singleVideo.snippet.title
              const videoId = singleVideo.id.videoId
              const thumbnailMedium = singleVideo.snippet.thumbnails.high.url
              return (
                    <div key={title} className="block max-w-sm sm:m-10 m-10 mt-20 rounded-lg shadow">
                        <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className="block m-5">
                        <figure className="md:w-[300px] sm:w-[150px]">
                            <img className="h-auto md:max-w-full sm:w-[96] rounded-lg" src={thumbnailMedium}/>
                        </figure>
                        <div>
                        <link rel="stylesheet" href={playCircle} />
                        <div className='flex flex-row items-center md:w-[300px]'>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="100px" fill="#EA3323"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                          <h5 className="text-md  tracking-tight text-white flex">{title}</h5>
                        </div>
                        </div>
                        </Link>
                    </div>
              )
            })}
        </main>
  )
}

export default MyYoutube
