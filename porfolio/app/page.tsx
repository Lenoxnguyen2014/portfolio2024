import React from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import { getIntroAboutMe } from '@/utils/callContentful'
import MainHeader from '@/components/mainPageHeader'
import AboutMe from '@/components/aboutMe'
import Weather from '@/components/weather'


export default async function Home () {
  const data = await getWeatherData()
  const introAboutMe = await getIntroAboutMe()
  const aboutMe = introAboutMe.items[0].fields

  const introTitle = aboutMe.introTitle
  const gallery = aboutMe.gallery
  const intro = aboutMe.intro
  const content = aboutMe.content_intro.content
  const headline = aboutMe.headline
  // const weatherMain = data.current.weather[0].main
  // const weatherDescription = data.current.weather[0].description
  // const weatherIcon = data.current.weather[0].icon
  // const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div className='flex w-full items-center flex-col mx-8 max-sm:mx-0'>
      <MainHeader />
      <AboutMe introTitle={introTitle} gallery={gallery} intro={intro} contentIntro={content} headline={headline} />
      {/* <Weather weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} /> */}
    </div>
  )
}
