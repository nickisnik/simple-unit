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
                if(!reference.current) {return}
                const clientRectObj = reference?.current?.getBoundingClientRect();
                const distanceFromTop = clientRectObj.top;
                const distanceFromBottom = clientRectObj.bottom
                const elementHeight = clientRectObj.height;
                // dark color change triggers if at least half of the element
                // is in the viewport and vice versa for bright color
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
            changeTheme('#252422', '#f4f4f4')

            /* clearInterval(intervalFn) */
        }}>
        <div className='spotlight-textbox'>
                <span>
                    SIMPLE/UNIT BRINGS PASSION ● <br/>
                    <motion.span    
                        
                        >
                        TO SPORTS AND TRAVEL 
                    </motion.span>
                </span>
                <span id="spotlight-subtitle">ADWEEK (AGENCY SPOTLIGHT)</span>
                <a href='' className='btn'>ABOUT US</a>

        </div>
        <div className="spotlight-vid-wrapper">
            <video src="/showcaseVid.mp4" autoPlay muted loop className='showcase-vid' width={700} height={1000}></video>
        </div>
    </motion.section>
  )
}

export default Spotlight