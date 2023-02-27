import React from "react";
import styles from "./styles.module.scss"

type ButtonProps = {
  children: React.ReactNode
  link?: string
}

const Button = ({ children, link }: ButtonProps) => {
  function handleClick() {
    console.log('click')
  }

  return (
    <button
      className={styles.container}
      onClick={handleClick}
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