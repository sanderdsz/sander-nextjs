import styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={`${[styles["hero__upper"]]}`}>
        <span>Future</span>
        <span>Thinking</span>
      </div>
      <div className={`${[styles["hero__down"]]}`}>
        <div className={`${[styles["hero__down--first"]]}`}>
          <span>Inspired</span>
          <span>Digital</span>
        </div>
        <span>Craftsman</span>
      </div>
    </div>
  )
}

export default Hero