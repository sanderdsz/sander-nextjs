import { getRecentlyPlayed } from "@/lib/spotify";
import React from "react";
import styles from "./styles.module.scss"

type ButtonProps = {
  children: React.ReactNode
  link?: string
  background?: string
}

const Button = ({ children, link, background }: ButtonProps) => {
  return (
    <button
      className={styles.container}
      style={{background: background}}
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