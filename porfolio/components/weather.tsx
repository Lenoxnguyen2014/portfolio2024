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
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-64 bg-gray-100/50">
            <div className="flex justify-center items-center">
                <img  src={weatherIconLink} alt="weaatherIcon" width={100} height={20} />
            </div>
            <div className=" box-border p-4 border-10">
                <h4>{weatherState}: {weatherMain} </h4>
                <div>
                    {weatherDescription} in Vancouver
                </div>
            </div>
        </div>
    )
}

export default Weather
