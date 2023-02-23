import { useEffect, useState } from "react"

const UseDeviceSize = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    function handleResize () {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
  }, []) 

  return [screenWidth, screenHeight]
}

export default UseDeviceSize