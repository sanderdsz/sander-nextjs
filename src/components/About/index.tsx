import { Typewriter } from "../Typewriter/index"
import UseDeviceSize from "../../utils/UseDeviceSize"

import styles from "./styles.module.scss"

const About = () => {
  const [width, height] = UseDeviceSize()

  return (
    <div className={styles.about}>
      <div className={`${[styles["about__header"]]}`}>
        <Typewriter />
      </div>
      <div className={`${[styles["about__name"]]}`}>
        <span>Sander</span>{" "}
        <span>dos Santos Zuchinalli</span>
      </div>
      <span className={`${[styles["about__maintext"]]}`}>
        { width <= 768 ? (
          <>
            I’m a software engineer specialized in building (occasionally designing)
            excellent digital experiences at {" "}
          </>
        ) : (
          <>
            I’m a software engineer specialized in building (occasionally designing)
            excellent digital experiences, which I tend to switch between backend
            and frontend technologies at {" "}
          </>
        ) }
      </span>
      <a
        className={styles.animation}
        target="_blank"
        href="https://www.nttdata.com/global/en/"
        rel="noreferrer"
      >
        NTT DATA.
      </a>
    </div>
  )
}

export default About