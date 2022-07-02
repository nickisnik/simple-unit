import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [cursorX, setCursorX] = useState('100');
  const [cursorY, setCursorY] = useState('100');
  const [cursorIn, setCursorIn] = useState(false);


  const handleCursor = (e) => {
    
    const debounce = 5
    if(e.pageX > cursorX + debounce || e.pageX < cursorX - debounce ||
       e.pageY > cursorY + debounce || e.pageY < cursorY - debounce) {
      console.log(e.pageX)  
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    }
  }

  return (
    <div className='app'>
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
      <div className='cursor' style={{"transform": `translate3d(${cursorX - 60}px, ${cursorY-60}px, 0px)`}}>
        <span>PLAY <br/> REEL</span>
      </div>
      <div className="video-container">
        <video className='bg-video' onMouseMove={(e) => {handleCursor(e)}} src="/video.mp4" autoPlay muted loop></video>
      </div>
      <main>
        <section className='about-wrapper'>
          <div className='about-text'>
            <p>SIMPLE/UNIT is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>
            <a href="">SEE THE WORK</a>
          </div>
          <div className='about-logo'><span>S/U®</span></div>
        </section>
      </main>
    </div>
  )
}
