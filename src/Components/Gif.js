import React from 'react';
import baile from '../PreloadsImgs/mygif.webm'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Gif() {
  return (
    <>
    <div className='gif__container'>
      <LazyLoadImage
        className='isaac'
        src={'Img/isaac.avif'}
        alt='yoneme pflc'  
      />
      <div className='gif__box'>
        <video
          src={baile}
          autoPlay
          loop
          className='mygif' 

        />
      </div>
          <LazyLoadImage
          className='mariella'
          src={'Img/mariella.avif'}
          alt='yoneme pflc'
          />
    </div>
    </>
  )
}

export default Gif
