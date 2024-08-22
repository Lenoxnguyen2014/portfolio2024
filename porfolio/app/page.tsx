import React, { lazy, Suspense } from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import { getIntroAboutMe } from '@/utils/callContentful'
import Loading from '@/components/loading'
import { GoogleAnalytics } from '@next/third-parties/google'

const AboutMePreview = lazy(() => delayForDemo(import('../components/aboutMe')))

function delayForDemo(promise: Promise<typeof import("../components/aboutMe")>) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
export default async function Home () {
  const data = await getWeatherData()
  const introAboutMe = await getIntroAboutMe()
  const aboutMe = introAboutMe.items[0].fields

  const introTitle = aboutMe.introTitle
  const gallery = aboutMe.gallery
  const intro = aboutMe.intro
  const content = aboutMe.content_intro.content
  const headline = aboutMe.headline
  
  return (
    <Suspense fallback={<Loading />} className='flex w-full items-center flex-col mx-8 max-sm:mx-0'>
      <AboutMePreview introTitle={introTitle} gallery={gallery} intro={intro} contentIntro={content} headline={headline} />
      <GoogleAnalytics gaId="G-FMFWNCYELS" />
    </Suspense>
  )
}


