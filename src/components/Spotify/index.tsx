import useSwr from 'swr'
import Button from "../Button"
import { SpotifyLogo } from 'phosphor-react'

import styles from './styles.module.scss'
import Soundwave from '../Soundwave'
import UseDeviceSize from '@/utils/UseDeviceSize'

type RecentlyProps = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  title: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Spotify = () => {
  const [screenWidth, screenHeight] = UseDeviceSize()
  const { data: currently } = useSwr<RecentlyProps>("/api/spotify/currently", fetcher)
  const { data: recently } = useSwr("/api/spotify/recently", fetcher)

  return (
    <div className={styles.container}>
      <Button padding={'.5rem'} background='#1ED760'>
        <SpotifyLogo size={screenWidth <= 996 ? 80 : 128} />
      </Button>
      <div className={styles.info}>
        { currently?.isPlaying ? (
          <>
            <span className={`${[styles["song__header"]]}`}>
              <Soundwave/>
              { screenWidth <= 996 ? (
                <>
                   Playing
                </>
              ) : (
                <>
                  Currently playing
                </>
              )}
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
            <Soundwave/>
              { screenWidth <= 996 ? (
                <>
                  Last played
                </>
              ) : (
                <>
                  Offline. Last played
                </>
              )}
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