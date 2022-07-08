import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'


const News = () => {


  const newsItemArr = [1, 2, 3, 4, 5, 6, 7, 8];

  const newsItem = newsItemArr.map((item, index) => {
    return (
        <motion.a
           className='news-item'
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           viewport={{once: true}}
           transition={{ duration: 0.4}}
           key={index}
           >
          <div className='news-photo-wrapper'>
            <Image src="/news1.jpg" alt='news-img' width={1000} height={800}></Image>
          </div>
          <div className='news-item-title-wrapper'>
            <span className='news-item-title'>BASIC AGENCY BLAH/BLAH</span>
          </div>
        </motion.a>
    )
  })

  return (
    <div className='news-wrapper'>

      <header className='news-header'>
        <span className='news-header-title'>FEATURED <br/> NEWS</span>
        <button className='news-btn'>VIEW ALL</button>
      </header>

      <section className='news-list'>

        {newsItem}

      </section>

    </div>
  )
}

export default News