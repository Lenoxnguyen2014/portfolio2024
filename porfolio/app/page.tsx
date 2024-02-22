import type { NextApiRequest, NextApiResponse } from 'next'
import  Weather  from '@/components/weather'
type ResponseData = {
  "current": {
    "weather": [
      {
        "id": string,
        "main": string,
        "description": string,
        "icon": string
      }
    ]
  }
}

const getWeatherData = async (): Promise<ResponseData> => {
  const openWeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.WEATHER_API_LAT}&lon=${process.env.WEATHER_API_LON}&appid=${process.env.WEATHER_API_KEY}`

  const res = await fetch(openWeatherAPI, { next: { revalidate: 3600 }} )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data  = await getWeatherData()
  const weatherMain = data["current"]["weather"][0]["main"]
  const weatherDescription = data["current"]["weather"][0]["description"]
  const weatherIcon = data["current"]["weather"][0]["icon"]
  const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div> Home
      <Weather weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} />
    </div>
  )
}
