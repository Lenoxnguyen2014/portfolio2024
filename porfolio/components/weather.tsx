'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
    weatherMain: string,
    weatherDescription?: string,
    weatherIcon: string,
    weatherIconLink: string
}

const Weather = ({ weatherMain, weatherDescription, weatherIcon, weatherIconLink }: Props) => {
    const weatherState  = 'Today: '

    return (
        <div>
            {weatherState}
            {weatherMain}, {weatherDescription} <img src={weatherIconLink} alt="weaatherIcon" width={20} height={20} />
        </div>
    )
}

export default Weather
