import React, { lazy, Suspense } from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import { getIntroAboutMe, getAllServicesEntry, getAllProcessEntry, getAllReviewsEntry, getAllProjectEntry } from '@/utils/callContentful'
import Loading from '@/components/loading'
import { GoogleAnalytics } from '@next/third-parties/google'

const MainPreview = lazy(() => delayForDemo(import('../components/main')))

function delayForDemo(promise: Promise<typeof import("../components/main")>) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
export default async function Home () {  
  const introAboutMe = await getIntroAboutMe()
  const introServices = await getAllServicesEntry()
  const introProcess = await getAllProcessEntry()
  const introReview = await getAllReviewsEntry()
  const introProjects = await getAllProjectEntry()

  const aboutMe = introAboutMe.items[0].fields

  const services = introServices.items
  const recentProjects = introProjects.items
  const process = introProcess.items
  const reviews = introReview.items

  const introTitle = aboutMe.introTitle
  const gallery = aboutMe.gallery
  const intro = aboutMe.intro
  const punchline = aboutMe.punchline
  const content = aboutMe.content_intro
  const headline = aboutMe.headline
  return (
    <Suspense fallback={<Loading />} className='flex w-full items-center flex-col max-sm:mx-0'>
      <MainPreview 
        introTitle={introTitle}
        gallery={gallery}
        intro={intro}
        contentIntro={content}
        punchline={punchline}
        headline={headline}
        introServices={services}
        recentProjects={recentProjects}
        introProcess={process}
        introReviews={reviews}
        />
      <GoogleAnalytics gaId="G-FMFWNCYELS" />
    </Suspense>
  )
}


