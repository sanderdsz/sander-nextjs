import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.title}>Sander</span>{" "}
        <span className={styles.subtitle}>Zuchinalli</span>
      </div>
    </div>
  )
}

export default Header