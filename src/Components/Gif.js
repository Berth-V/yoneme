import React from 'react';
import LazyLoad from 'react-lazy-load';
import { motion } from 'framer-motion';
import baile from '../PreloadsImgs/mygif.gif'

function Gif() {
  return (
    <>
    
    <div className='gif__container'>
    
      <LazyLoad threshold={0.5}>
          <img
          className='isaac'
          src={'Img/isaac.png'}/>
      </LazyLoad>
      <div className='gif__box'>
      <LazyLoad threshold={0.5}>
          <motion.img
          className='mygif' 
          src={baile}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}/>
      </LazyLoad>
      </div>
      <LazyLoad threshold={0.5}>
          <img
          className='mariella'
          src={'Img/mariella.png'}/>
      </LazyLoad>
    </div>
    
    </>
  )
}

export default Gif
