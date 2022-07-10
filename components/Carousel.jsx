import React, {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const Carousel = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  const carouselRef = useRef(null);

  const [leftConstraint, setLeftConstrait] = useState(-1700);
  const [cursorVariant, setCursorVariant] = useState('start');

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


  const handleCursor = (e) => {
    const clientRectObj = wrapperRef?.current?.getBoundingClientRect();
    if(cursorVariant === 'hidden') {return}
    if(e.clientX - clientRectObj.left < 0 || e.clientY - clientRectObj.top < 0) {
      setCursorVariant('hidden')
    }
    
    setMousePos({
      x: e.clientX - clientRectObj.left,
      y: Math.floor(e.clientY - clientRectObj.top)
    })
  }
  const variants = {
    default: {
      x: mousePos.x -50,
      y: mousePos.y -50,
      opacity: 1,
      top:0,
      left:0
    },
    active: {
      x: mousePos.x -50,
      y: mousePos.y -50,
      opacity: 1,
      top:0,
      left:0,
      scale: 0.5,
    },
    hidden: {
      opacity: 0,
      top: 0,
      left: 0,
      x: mousePos.x -50,
      y: mousePos.y -50,
      transitionEnd: {
        top: "50%",
        left: "90%",
        x: "-50%",
        y: "-50%",
        opacity: 0.999,
      }
    },
    start: {
      top: "50%",
      left: "90%",
      x: "-50%",
      y: "-50%",
      opacity: 1,
    }

  }

  const wrapperRef = useRef(null);


  return (
    <section className='engagements-wrapper'>
          <header className='engagements-header'>
            <span id="featured">FEATURED</span>
            <span>ENGAGEMENTS</span>
          </header>
          <div className="carousel-wrapper"
              onMouseDown={() => {setCursorVariant('active')}}
              onMouseUp={() => {setCursorVariant('default')}}
              ref={wrapperRef}
              onMouseMove={(e) => {handleCursor(e)}}
              onMouseEnter={() => {setCursorVariant('default')}}
              onMouseLeave={() => {setCursorVariant('hidden'); console.log('mouse left')}}  >
            <motion.div
              className='engagements-carousel'
              ref={carouselRef}
              drag="x"
              dragConstraints={{ left: leftConstraint, right: 0 }}
              
              >
              {carouselItem}
            </motion.div>
              <motion.div 
                className={cursorVariant === 'active' ? "brand-cursor active-cursor" : "brand-cursor"}
                variants={variants}
                animate={cursorVariant}
                transition={{type: "spring", mass: 0.1, stiffness: 100}}>
                <span>{cursorVariant === 'active' ? '' : 'DRAG'}</span>
              </motion.div>
          
          </div>
        </section>
  )
}

export default Carousel