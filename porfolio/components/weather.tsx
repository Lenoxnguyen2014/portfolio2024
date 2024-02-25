'use client'

interface Props {
    weatherMain: string,
    weatherDescription?: string,
    weatherIcon: string,
    weatherIconLink: string
}

const Weather = ({ weatherMain, weatherDescription, weatherIconLink }: Props) => {
    const weatherState  = 'Today: '

    return (
        <div>
            {weatherState}
            {weatherMain}, {weatherDescription} <img src={weatherIconLink} alt="weaatherIcon" width={20} height={20} />
        </div>
    )
}

export default Weather
