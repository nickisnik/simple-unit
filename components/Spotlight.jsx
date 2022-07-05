import React from 'react'
import {motion} from 'framer-motion'

const Spotlight = () => {

    const changeTheme = (text, bg) => {
        document.documentElement.style.setProperty('--text-color', text);
        document.documentElement.style.setProperty('--background', bg);
    }

  return (
    <section  className='spotlight-wrapper'>
        <div className='spotlight-textbox'>
                <span>
                    BASIC/DEPT® HELPS BRANDS ●
                    <motion.span    
                        onViewportEnter={() => changeTheme('#f9cdcd', '#252422')}
                        onViewportLeave={() => changeTheme('#252422', '#f4f4f4')}    >
                        CONNECT W/ CULTURE
                    </motion.span>
                </span>
                <span id="spotlight-subtitle">ADWEEK (AGENCY SPOTLIGHT)</span>
                <button className='spotlight-btn'>ABOUT US</button>

        </div>
        <div className="spotlight-vid-wrapper">
            <video src="/showcase.mp4" autoPlay muted loop className='showcase-vid' width={700} height={1000}></video>
        </div>
    </section>
  )
}

export default Spotlight