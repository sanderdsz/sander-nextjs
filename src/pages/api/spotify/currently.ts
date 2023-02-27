import { getPlayingSong } from "@/lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getPlayingSong()
  
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song: any = await response.json()

  let title

  if (song.item.name.length > 20) {
    title = song.item.name.slice(0, 20) + '...'
  } else {
    title = song.item.name
  }

  const isPlaying = true;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    title,
  });
}