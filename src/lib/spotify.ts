const getAccessToken = async () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
  })

  return response.json()
}

const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

const getPlayingSong = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken()

  return fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })
}

export { getAccessToken, getTopTracks, getPlayingSong, getRecentlyPlayed }