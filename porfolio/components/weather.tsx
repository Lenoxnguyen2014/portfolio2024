'use client'
import * as React from 'react'
import { motion } from "framer-motion"

interface Weather {
    weatherMain: string,
    weatherDescription?: string,
    weatherIcon: string,
    weatherIconLink: string
}

const Weather = ({ weatherMain, weatherDescription, weatherIconLink }: Weather) => {
  const weatherState = 'Today: '

  return (
        <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-64 bg-cyan-900 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                >
                <div className="flex justify-center items-center h-36">
                    <img src={weatherIconLink} alt="weaatherIcon" width={100} height={20} />
                </div>

                <div className=" box-border p-4 border-10 ">
                    <h4>{weatherState} {weatherMain} </h4>
                <div>
                    {weatherDescription} in Vancouver
                </div>

                </div>
            </motion.div>

        </div>
        </div>
  )
}

export default Weather
