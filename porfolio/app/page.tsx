import React, { lazy, Suspense } from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import { getIntroAboutMe, getAllServicesEntry, getAllProcessEntry, getAllReviewsEntry, getAllProjectEntry } from '@/utils/callContentful'
import Loading from '@/components/loading'
import { GoogleAnalytics } from '@next/third-parties/google'
import ServicesIntro from '@/components/servicesIntro'

const AboutMePreview = lazy(() => delayForDemo(import('../components/aboutMe')))

function delayForDemo(promise: Promise<typeof import("../components/aboutMe")>) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
export default async function Home () {
  const data = await getWeatherData()
  
  const introAboutMe = await getIntroAboutMe()
  const introServices = await getAllServicesEntry()
  const introProcess = await getAllProcessEntry()
  const introReview = await getAllReviewsEntry()
  const introProjects = await getAllProjectEntry()

  const aboutMe = introAboutMe.items[0].fields

  const services = introServices.items
  const recentProjects = introProjects.items
  const process = introProcess.items
  const review = introReview.items

  const introTitle = aboutMe.introTitle
  const gallery = aboutMe.gallery
  const intro = aboutMe.intro
  const content = aboutMe.content_intro
  const headline = aboutMe.headline

  return (
    <Suspense fallback={<Loading />} className='flex w-full items-center flex-col max-sm:mx-0'>
      <AboutMePreview 
        introTitle={introTitle}
        gallery={gallery}
        intro={intro}
        contentIntro={content}
        headline={headline}
        introServices={services}
        recentProjects={recentProjects}
        />
      <GoogleAnalytics gaId="G-FMFWNCYELS" />
    </Suspense>
  )
}


