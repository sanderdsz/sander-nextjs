import { getRecentlyPlayed } from "@/lib/spotify";

export default async function handler(req, res) {
  const response = await getRecentlyPlayed()
  const { items } = await response.json()

  const obj = items[0]

  let song_name: string = obj.track.name

  if (song_name.length > 20) {
    console.log(song_name.slice(0, 20) + '...')
    song_name = song_name.slice(0, 20) + '...'
  } else {
    song_name
  }

  const recently = {
    title: song_name,
    artist: obj.track.artists[0].name,
    coverImage: obj.track.album.images[0].url
  }

  return res.status(200).json(recently);
}