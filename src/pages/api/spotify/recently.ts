import { getRecentlyPlayed } from "@/lib/spotify";

export default async function handler(req, res) {
  const response = await getRecentlyPlayed()
  const { items } = await response.json()

  const obj = items[0]

  const recently = {
    title: obj.track.name,
    artist: obj.track.artists[0].name,
    coverImage: obj.track.album.images[0].url
  }

  return res.status(200).json(recently);
}