import { getRecentlyPlayed } from "@/lib/spotify";
import React from "react";
import styles from "./styles.module.scss"

type ButtonProps = {
  children: React.ReactNode
  link?: string
  background?: string
  padding?: string
}

const Button = ({ children, link, background, padding }: ButtonProps) => {
  return (
    <button
      className={styles.container}
      style={{background: background, padding: padding}}
      onClick={getRecentlyPlayed}
    >
      { link ? (
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          { children }
        </a>
      ) : (
        <>
          { children }
        </>
      ) }
    </button>
  )
}

export default Button