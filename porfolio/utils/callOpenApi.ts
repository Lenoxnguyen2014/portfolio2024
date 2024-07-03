type ResponseData = {
    'current': {
      'weather': [
        {
          'id': string,
          'main': string,
          'description': string,
          'icon': string
        }
      ]
    }
  }

export const getWeatherData = async (): Promise<ResponseData> => {
  const openWeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.WEATHER_API_LAT}&lon=${process.env.WEATHER_API_LON}&appid=${process.env.WEATHER_API_KEY}`

  const res = await fetch(openWeatherAPI, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
