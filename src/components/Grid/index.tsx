import { useEffect, useState } from 'react';
import Image from 'next/image'
import { WidthProvider, Responsive } from 'react-grid-layout'
import GridItem from '../GridItem';
import UseDeviceSize from '@/utils/UseDeviceSize';

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive)

const layoutLG = [
  { i: "first", x: 0, y: 0, w: 2, h: 14, minW: 2, maxW: 2 },
  { i: "second", x: 3, y: 0, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "third", x: 2, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fourth", x: 3, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fifth", x: 0, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "sixth", x: 1, y: 2, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "seventh", x: 3, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
];

const layoutSM = [
  { i: "first", x: 0, y: 0, w: 2, h: 4, minW: 2, maxW: 2 },
  { i: "second", x: 0, y: 8, w: 2, h: 4, minW: 2, maxW: 2 },
  { i: "third", x: 0, y: 4, w: 1, h: 4, minW: 1, maxW: 2 },
  { i: "fourth", x: 2, y: 4, w: 1, h: 4, minW: 1, maxW: 2 },
  { i: "fifth", x: 0, y: 16, w: 1, h: 4, minW: 1, maxW: 2 },
  { i: "sixth", x: 0, y: 12, w: 2, h: 4, minW: 2, maxW: 2 },
  { i: "seventh", x: 2, y: 16, w: 1, h: 4, minW: 1, maxW: 2 },
];

const Grid = () => {  
  const [gridItemHeight, setGridItemHeight] = useState(0)

  const [screenWidth, screenHeight] = UseDeviceSize()

  useEffect(() => {
    switch(true) {
      case screenWidth <= 768:
        setGridItemHeight(100)
        break;
      case screenWidth <= 996:
        setGridItemHeight(100)
        break;
      case screenWidth < 1200:
        setGridItemHeight(100)
        break;
      default:
        setGridItemHeight(350)
    }
  }, [screenWidth])

  return (
    <>
      <ResponsiveGridLayout
        layouts={{ lg: layoutLG, md: layoutSM, sm: layoutSM }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 4, md: 2, sm: 2, xs: 2 }}
        margin={[0, 0]}
        containerPadding={[0, 0]}
        rowHeight={50}
        isResizable={false}
      >
        <div key="first" style={{background: '#ECE4DE'}}>
          {(screenWidth <= 996) ? (
            <GridItem height={`${gridItemHeight}px`}>
              <p>Width: {screenWidth}</p>
              <p>Height: {screenHeight}</p>
            </GridItem>
          ) : (
            <GridItem height={`${2 * gridItemHeight}px`}>
              <p>Width: {screenWidth}</p>
              <p>Height: {screenHeight}</p>
            </GridItem>
          )}
        </div>
        <div key="second" style={{background: '#FFFFFF'}}>
          <GridItem height={`${gridItemHeight}px`} />
        </div>
        <div key="third" style={{background: '#6E5494'}}>
          <GridItem height={`${gridItemHeight}px`} />
        </div>
        <div key="fourth" style={{background: '#87B5CB'}}>
          <GridItem height={`${gridItemHeight}px`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* 
              <Image
                style={{ objectFit: 'cover' }}
                src="/sander-photo.png" 
                alt="me"
                width="360"
                height="345"
              />  
              */}
            </div>
          </GridItem>
        </div>
        <div key="fifth" style={{background: '#0077B5'}}>
          <GridItem height={`${gridItemHeight}px`} />
        </div>
        <div key="sixth" style={{background: '#D9D9D9'}}>
          <GridItem height={`${gridItemHeight}px`} />
        </div>
        <div key="seventh" style={{background: '#B6342A'}}>
          <GridItem height={`${gridItemHeight}px`} />
        </div>
      </ResponsiveGridLayout>
    </>
  )
} 

export default Grid