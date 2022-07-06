import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'

const Spotlight = () => {

    
    const changeTheme = (text, bg) => {
        document.documentElement.style.setProperty('--text-color', text);
        document.documentElement.style.setProperty('--background', bg);
    }

    const reference = useRef(null);

    
    const colorInvert = (() => {
        let intervalFn;
        const startViewCheck = () => {
            intervalFn = setInterval(() => {
                const clientRectObj = reference.current.getBoundingClientRect();
                const distanceFromTop = clientRectObj.top;
                const distanceFromBottom = clientRectObj.bottom
                const elementHeight = clientRectObj.height;
                if(distanceFromTop < elementHeight / 2 || distanceFromBottom > elementHeight / 2) {
                    changeTheme('#f9cdcd', '#252422')
                } 
                if(distanceFromTop < 0 && - distanceFromTop > elementHeight / 2) {
                    changeTheme('#252422', '#f4f4f4')
                }
                if(distanceFromTop > elementHeight / 2) {
                    changeTheme('#252422', '#f4f4f4')
                }
                
                
            }, 100)
        }

        return {
            startViewCheck, 
            stopViewCheck() {
                clearInterval(intervalFn)
            }
        }
            
    })()
    
    /* useEffect(() => {
        const int = setInterval(() => {

        })
        return () => {
            clearInterval(int)
        }
    }) */

  return (
    <motion.section  className='spotlight-wrapper'
        ref={reference}
        onViewportEnter={() => {
            /* changeTheme('#f9cdcd', '#252422') */
            colorInvert.startViewCheck()
            /* checkInView() */
        }}
        onViewportLeave={() => {
            /* changeTheme('#252422', '#f4f4f4') */
            colorInvert.stopViewCheck()
            /* clearInterval(intervalFn) */
        }}>
        <div className='spotlight-textbox'>
                <span>
                    BASIC/DEPT® HELPS BRANDS ●
                    <motion.span    
                        
                        >
                        CONNECT W/ CULTURE
                    </motion.span>
                </span>
                <span id="spotlight-subtitle">ADWEEK (AGENCY SPOTLIGHT)</span>
                <button className='spotlight-btn'>ABOUT US</button>

        </div>
        <div className="spotlight-vid-wrapper">
            <video src="/showcaseVid.mp4" autoPlay muted loop className='showcase-vid' width={700} height={1000}></video>
        </div>
    </motion.section>
  )
}

export default Spotlight