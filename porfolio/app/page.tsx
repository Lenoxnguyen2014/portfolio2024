import type { NextApiRequest, NextApiResponse } from 'next'
import { getWeatherData } from '@/utils/callOpenApi'
import  Weather  from '@/components/weather'
import GenerateQuote from '@/components/quote'

export default async function Home() {
  const data  = await getWeatherData()
  const weatherMain = data["current"]["weather"][0]["main"]
  const weatherDescription = data["current"]["weather"][0]["description"]
  const weatherIcon = data["current"]["weather"][0]["icon"]
  const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div className="grid h-screen place-items-center ">
      <Weather weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} />
      <div className="flex justify-center items-center h-32">
      <GenerateQuote />
      </div>
    </div>
  )
}
