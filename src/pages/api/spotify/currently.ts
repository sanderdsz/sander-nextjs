import { getPlayingSong } from "@/lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getPlayingSong()
  
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song: any = await response.json()

  const isPlaying = true;
  const title = song.item.name;
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