type ResponseYoutubeData = {

}


export const callYoutubeAPI = async(): ResponseYoutubeData => {
    const youtubeAPI = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${process.env.CHANNEL_ID}&part=snippet,id&order=date&maxResults=20 `

    const res = await fetch(youtubeAPI, { next: { revalidate: 3600 }} )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}