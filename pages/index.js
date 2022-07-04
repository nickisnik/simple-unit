import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

export default function Home() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState('start');

  const handleCursor = (e) => {
    setMousePos({
      x: e.pageX,
      y: e.pageY
    })
  }
  const variants = {
    default: {
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      opacity: 1,
      top:0,
      left:0
    },
    hidden: {
      x: mousePos.x - 50,
      y: mousePos.y - 50,
      scale: 0.3,
      opacity: 0,
      transitionEnd: {
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        opacity: 1,
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
    <div className='app'>
      <Head>
        <title>SIMPLE/UNIT</title>
      </Head>
      <header className='nav-bar'>
        <div className='logo'><span>SIMPLE/UNIT</span></div>
        <ul className='nav-bar__links'>
          <li className="nav-bar__link">WORK</li>
          <li className="nav-bar__link">ABOUT</li>
          <li className="nav-bar__link">NEWS</li>
          <li className="nav-bar__link">THINKING</li>
          <li className="nav-bar__link">PLEDGE</li>
          <li className="nav-bar__link">CAREERS</li>
          <li className="nav-bar__link">CONTACT</li>
        </ul>
        <div className='menu-btn'><span>ooo</span></div>
      </header>
      
      <div className="video-container">
      <motion.div 
          className='cursor'
          variants={variants}
          animate={cursorVariant}
          transition={{type: "spring", mass: 0.1, stiffness: 300}}
          >
        <span>PLAY <br/> REEL</span>
      </motion.div>
        <video  className='bg-video'
                onMouseMove={(e) => {handleCursor(e)}} src="/video.mp4" autoPlay muted loop
                onMouseEnter={() => {setTimeout(() => {setCursorVariant('default')}, 100)}}
                onMouseLeave={() => {setCursorVariant('hidden')}}
                ></video>
      </div>
      
      <div className='start-screen'>
        <span className='start-title'>SIMPLE <br/>/ UNIT</span>
        <div className='start-title-cover'></div>
      </div>

      <main>

        <section className='about-wrapper'>
          <div className='about-text'>
            <p>SIMPLE/UNIT is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>
            <a href="">SEE THE WORK</a>
          </div>
          <div className='about-logo'><span>S/U®</span></div>
        </section>

        <section className='product-showcase-list'>
          <div className="product-showcase-item">
            <div className='product-img-wrappper'>
              <Image src="/flower1.jpg" width={900} height={1200}></Image>{/* <img src="/flower1.jpg" alt="" /> */}
            </div>
            <div className='product-text-wrapper'>
              <span className='product-title'>Adventure</span>
              <p className='product-description'>Amazing scenery<br/>Beautiful landscapes<br/>gigantic mountains</p>
            </div>
          </div>
          <div className="product-showcase-item">
            <div className='product-img-wrappper'>
              <Image src="/flower2.jpg" width={900} height={1200}></Image>{/* <img src="/flower2.jpg" alt="" /> */}
            </div>
            <div className='product-text-wrapper'>
              <span className='product-title'>Nature</span>
              <p className='product-description'>Amazing scenery<br/>Beautiful landscapes<br/>gigantic mountains</p>
            </div>
          </div>
          <div className="product-showcase-item">
            <div className='product-img-wrappper'>
              <video className='apparel-video' width={900} height={1200} src="/apparel.mp4" autoPlay muted loop></video>
              {/* <Image src="/flower3.jpg" width={640} height={950} alt='flower'></Image> */}
            </div>
            <div className='product-text-wrapper'>
              <span className='product-title'>Sports</span>
              <p className='product-description'>Amazing scenery<br/>Beautiful landscapes<br/>gigantic mountains</p>
            </div>
          </div>


        </section>

        <section className='engagements-wrapper'>
          <header className='engagements-header'>
            <span id="featured">FEATURED</span>
            <span>ENGAGEMENTS</span>
          </header>
          <motion.div drag="x" dragConstraints={{ left: -500, right: 0 }} className='engagements-carousel'>
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
      </main>
    </div>
  )
}
