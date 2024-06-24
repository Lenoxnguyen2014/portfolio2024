'use client'
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import GenerateQuote from './quote'
interface Weather {
    weatherMain: string,
    weatherDescription?: string,
    weatherIcon: string,
    weatherIconLink: string
}

const Weather = ({ weatherMain, weatherDescription, weatherIconLink }: Weather) => {
  const weatherState = 'Today: '

  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-64 bg-gray-100/50">
                <div className="flex justify-center items-center h-36">
                    <img src={weatherIconLink} alt="weaatherIcon" width={100} height={20} />
                </div>
                <div className=" box-border p-4 border-10 ">
                <h4>{weatherState} {weatherMain} </h4>
                <div>
                    {weatherDescription} in Vancouver
                </div>
            </div>
        </div>
  )
}

export default Weather
