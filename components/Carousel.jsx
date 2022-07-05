import React, {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const Carousel = () => {

    const carouselRef = useRef(null);

  const [leftConstraint, setLeftConstrait] = useState(-1700);

  useEffect(() => {
    setLeftConstrait(- carouselRef?.current?.clientWidth + window?.innerWidth - 150)
  }, [carouselRef])

  return (
    <section className='engagements-wrapper'>
          <header className='engagements-header'>
            <span id="featured">FEATURED</span>
            <span>ENGAGEMENTS</span>
          </header>
          <motion.div ref={carouselRef} drag="x" dragConstraints={{ left: leftConstraint, right: 0 }} className='engagements-carousel'>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
            <div className='carousel-item'>
              <span>Google</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda dolores error animi vel blanditiis esse ipsum, tempora eos? Animi suscipit rerum placeat inventore iste, possimus repudiandae aliquid amet sunt.</p>
            </div>
          </motion.div>
        </section>
  )
}

export default Carousel