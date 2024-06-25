import React, { Children } from 'react'
import { getWeatherData } from '@/utils/callOpenApi'
import Weather from '@/components/weather'

export default async function Home () {
  const data = await getWeatherData()
  const weatherMain = data.current.weather[0].main
  const weatherDescription = data.current.weather[0].description
  const weatherIcon = data.current.weather[0].icon
  const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div >
      <Weather className="min-h-screen" weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} />
    </div>
  )
}
