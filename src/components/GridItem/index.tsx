import styles from './styles.module.scss'

type GridItemProps = {
  height?: string
  isCenter?: boolean
  isCenterVertical?: boolean
  isCenterHorizontal?: boolean
  children?: any
}

const GridItem = ({ height, isCenter, isCenterVertical, isCenterHorizontal, children }: GridItemProps) => {
  return (
    <>
      {isCenter && (
        <div 
          className={`${styles.container} ${[styles["container--center-vertical"]]} ${[styles["container--center-horizontal"]]}`}
          style={{ height: height }}
        >
          { children }
        </div>
      )}
      {isCenterVertical && (
        <div 
          className={`${styles.container} ${[styles["container--center-vertical"]]}`}
          style={{ height: height }}
        >
          { children }
        </div>
      )}
      {isCenterHorizontal && (
        <div 
          className={`${styles.container} ${[styles["container--center-horizontal"]]}`}
          style={{ height: height }}
        >
          { children }
        </div>
      )}
      {!isCenter && !isCenterHorizontal && !isCenterVertical && (
        <div 
          className={`${styles.container}`}
          style={{ height: height }}
        >
        { children }
      </div>
      )}
    </>
  )
}

export default GridItem