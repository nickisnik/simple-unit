import React, {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const Carousel = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  const carouselRef = useRef(null);

  const [leftConstraint, setLeftConstrait] = useState(-1700);

  useEffect(() => {
    setLeftConstrait(- carouselRef?.current?.clientWidth + window?.innerWidth - 150)
  }, [carouselRef]);



  const carouselList = [1, 2, 3, 4, 5]
  const carouselItem = carouselList.map((item, index) => {
    return (
      <div className='carousel-item' key={index}>
        <span className='carousel-brand-logo'>BRAND LOGO</span>
        <span className='carousel-brand-name'>Google</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
      </div>
    )
  })

  const [cursorVariant, setCursorVariant] = useState('start');

  const handleCursor = (e) => {
    console.log(e.nativeEvent.offsetX)
    setMousePos({
      x: e.nativeEvent.layerX,
      y: e.nativeEvent.layerY
    })
  }
  const variants = {
    default: {
      x: mousePos.x -100,
      y: mousePos.y -100,
      opacity: 1,
      top:0,
      left:0
    },
    hidden: {
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      scale: 1,
      opacity: 0,
      transitionEnd: {
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        opacity: 0.999,
        scale: 1,
      }
    },
    start: {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1,
    }

  }

  return (
    <section className='engagements-wrapper'>
          <header className='engagements-header'>
            <span id="featured">FEATURED</span>
            <span>ENGAGEMENTS</span>
          </header>
          <div className="carousel-wrapper"
              /* onMouseMove={(e) => {handleCursor(e)}} src="/video2.mp4" autoPlay muted loop
              onMouseEnter={() => {setTimeout(() => {setCursorVariant('default')}, 100)}}
              onMouseLeave={() => {setCursorVariant('hidden')}}  */ >
            <motion.div
             
             ref={carouselRef} drag="x" dragConstraints={{ left: leftConstraint, right: 0 }} className='engagements-carousel'>
              {carouselItem}
            
            </motion.div>
          <motion.div 
            className='brand-cursor'
            variants={variants}
            animate={cursorVariant}
            transition={{type: "spring", mass: 0.1, stiffness: 100}}>
            
          </motion.div>
          </div>
        </section>
  )
}

export default Carousel