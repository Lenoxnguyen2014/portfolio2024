import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import clouds from'@/public/clouds.svg'
import rain from '@/public/rain.svg'
import snow from '@/public/snow.svg'
import clear from '@/public/clear.svg'
import mist from '@/public/mist.svg'
import fog from '@/public/fog.svg'
import smoke from '@/public/smoke.svg'
import { getWeatherData } from '@/utils/callOpenApi'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  title: "Create Next App",
  description: "Generated by create next app",
}

export const revalidate = 3600

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/myyoutube', label: 'My Youtube' },
    { href: '/resume', label: 'Resume' },
    { href: '/blogs', label: 'Blogs'},
    { href: '/contact', label: 'Contact'}
  ]

  imgSrc = await changeBackgroundBaseOnWeather()

  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen`} style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
        <header className="">
          <nav className="">
            <ul className="grid grid-cols-5 gap-1 content-center">
              {links.map(({ href, label }) => (
                <li key={href} className="px-4 text-sm md:text-2xl ">
                  <Link className="active:bg-sky-100" href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
