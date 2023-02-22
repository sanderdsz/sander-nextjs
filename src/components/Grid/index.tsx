import { WidthProvider, Responsive } from 'react-grid-layout';
import Image from 'next/image';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "first", x: 0, y: 0, w: 2, h: 14, minW: 2, maxW: 2 },
  { i: "second", x: 3, y: 0, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "third", x: 2, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fourth", x: 3, y: 1, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "fifth", x: 0, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
  { i: "sixth", x: 1, y: 2, w: 2, h: 7, minW: 2, maxW: 2 },
  { i: "seventh", x: 3, y: 2, w: 1, h: 7, minW: 1, maxW: 1 },
];

const Grid = () => {
  return (
    <>
      <ResponsiveGridLayout
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
          cols={{ lg: 4, md: 2, sm: 2, xs: 2 }}
          margin={[0, 0]}
          containerPadding={[0, 0]}
          rowHeight={50}
          isResizable={false}
        >
          <div key="first" style={{background: '#ECE4DE'}}></div>
          <div key="second" style={{background: '#FFFFFF'}}></div>
          <div key="third" style={{background: '#6E5494'}}></div>
          <div key="fourth" style={{background: '#87B5CB'}}>
              <Image 
                className="object-cover" 
                layout="responsive" 
                src="/sander-photo.png" 
                alt="me" 
                width="300" 
                height="300"
              />
          </div>
          <div key="fifth" style={{background: '#0077B5'}}></div>
          <div key="sixth" style={{background: '#D9D9D9'}}></div>
          <div key="seventh" style={{background: '#B6342A'}}></div>
      </ResponsiveGridLayout>
    </>
  )
} 

export default Grid