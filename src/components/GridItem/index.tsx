import styles from './styles.module.scss'

type GridItemProps = {
  height?: string,
  children?: any
}

const GridItem = ({ height, children }: GridItemProps) => {
  return (
    <div 
      className={styles.container}
      style={{ height: height }}
    >
      { children }
    </div>
  )
}

export default GridItem