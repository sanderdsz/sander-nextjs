import styles from "./styles.module.scss"

const Soundwave = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${[styles["sound-wave"]]}`}>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
            <div className={`${[styles["sound-bar"]]}`}></div>
        </div>
      </div>
    </>
  )
}

export default Soundwave