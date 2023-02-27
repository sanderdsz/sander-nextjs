import styles from "./styles.module.scss"

type ButtonProps = {
  children: any
}

const Button = ({ children }: ButtonProps) => {
  function handleClick() {
    console.log('click')
  }

  return (
    <button
      className={styles.container}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}

export default Button