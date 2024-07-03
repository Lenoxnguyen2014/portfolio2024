import React from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import Weather from '@/components/weather'
import MainHeader from '@/components/mainPageHeader'

export default async function Home () {
  const data = await getWeatherData()
  const weatherMain = data.current.weather[0].main
  const weatherDescription = data.current.weather[0].description
  const weatherIcon = data.current.weather[0].icon
  const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div className='flex w-full items-center'>
      <MainHeader />
      {/* <Weather weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} /> */}

    </div>
  )
}
