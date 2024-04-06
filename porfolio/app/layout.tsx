import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clouds from'@/public/clouds.svg'
import rain from '@/public/rain.svg'
import snow from '@/public/snow.svg'
import clear from '@/public/clear.svg'
import mist from '@/public/mist.svg'
import fog from '@/public/fog.svg'
import smoke from '@/public/smoke.svg'
import { getWeatherData } from '@/utils/callOpenApi'
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from "@/components/navbar"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

const changeBackgroundBaseOnWeather = async() => {
  
  const data  = await getWeatherData()
  const weatherMain = data["current"]["weather"][0]["main"]
  const img = (weatherMain: string) => {
    switch (weatherMain) {
    case "Clouds":
      return clouds
    case "Rain":
      return rain
    case "Snow":
      return snow
    case "Clear":
      return clear
    case "Mist":
      return mist
    case "Fog" && "Smoke":
      return smoke
    case "Haze" && "Dust":
      return fog
    default: clear
    }
  }
  var result = img(weatherMain)
  return result.src
}
var imgSrc: string


export const metadata: Metadata = {
  title: "lezen",
  description: "lezen",
}

export const revalidate = 3600

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  imgSrc = await changeBackgroundBaseOnWeather()

  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen`} style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
        <header className="">
          <NavBar />
        </header>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
