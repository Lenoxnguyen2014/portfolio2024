import type { NextApiRequest, NextApiResponse } from 'next'
import { getWeatherData } from '@/utils/callOpenApi'
import  Weather  from '@/components/weather'
import GenerateQuote from '@/components/quote'
import ParallaxComponent from '@/components/paralax'

export default async function Home() {
  
  const data  = await getWeatherData()
  const weatherMain = data["current"]["weather"][0]["main"]
  const weatherDescription = data["current"]["weather"][0]["description"]
  const weatherIcon = data["current"]["weather"][0]["icon"]
  const weatherIconLink = `http://openweathermap.org/img/w/${weatherIcon}.png`

  return (
    <div >
      ideas: pass weather value into Paralx and call weather componenents acting as sticky one, and then basically have the term
      When [Vancouver weather] I go out, 
      Even when [ Vancouver weather] I still go out
      ( write in animated typing Quote)
      change backgroundweather to the weather like I have
      Implement scrolling bar to youtube
      and 
      <ParallaxComponent />
      <Weather weatherMain={weatherMain} weatherDescription={weatherDescription} weatherIcon={weatherIcon} weatherIconLink={weatherIconLink} />
      {/* <div className="flex justify-center items-center h-32">
      <GenerateQuote />
      </div> */}
    </div>
  )
}
