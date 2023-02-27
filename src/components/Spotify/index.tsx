import useSwr from 'swr'
import Button from "../Button"
import { SpotifyLogo } from 'phosphor-react'

import styles from './styles.module.scss'
import Soundwave from '../Soundwave'

type RecentlyProps = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  title: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())


const Spotify = () => {

  const { data: currently } = useSwr<RecentlyProps>("/api/spotify/currently", fetcher)
  const { data: recently } = useSwr("/api/spotify/recently", fetcher)

  return (
    <div className={styles.container}>
      <Button background='#1ED760'>
        <SpotifyLogo size={128}/>
      </Button>
      <div className={styles.info}>
        { currently?.isPlaying ? (
          <>
            <span className={`${[styles["song__header"]]}`}>
              <Soundwave/> Currently Playing
            </span>
            <span className={`${[styles["song__title"]]}`}>
              { currently?.title }
            </span>
            <span className={`${[styles["song__artist"]]}`}>
              { currently?.artist }
            </span>
          </>
        ) : (
          <>
            <span className={`${[styles["song__header"]]}`}>
              <Soundwave/> Offline. Last Played
            </span>
            <span className={`${[styles["song__title"]]}`}>
              { recently?.title }
            </span>
            <span className={`${[styles["song__artist"]]}`}>
              { recently?.artist }
            </span>
          </>
        ) }
      </div>
    </div>
  )
}

export default Spotify