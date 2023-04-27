import {useState, useCallback} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {motion} from 'framer-motion';
import ImageViewer from 'react-simple-image-viewer';

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
    // Framer Motion Variables //
  const imgOpacityAnimation = {
    start: {opacity: 0},
    end: {
      opacity: 1,
      transition: {delay: 0.3},
    },
  };
  const imgs = [
    'Img/img1.avif',
    'Img/img2.avif',
    'Img/img3.avif',
    'Img/img4.avif',
    'Img/img5.avif',
    'Img/img6.avif',
    'Img/img7.avif',
    'Img/img8.avif',
    'Img/img9.avif',
    'Img/img10.avif',
    'Img/img11.avif',
    'Img/img12.avif',
    'Img/img13.avif',
    'Img/img14.avif',
    'Img/img15.avif',
    'Img/img16.avif',
  ];

  return (
    <div className='gallery'>
      <div className='gallery__box'>
        {imgs.map((imgs, index) => (
          <motion.div
            className='gallery__item'
            variants={imgOpacityAnimation}
            initial='start'
            whileInView='end'
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <LazyLoadImage
              className='gallery__img'
              onClick={() => openImageViewer(index)}
              src={imgs}
              key={index}
              alt='yoneme galeria'
            />
          </motion.div>
        ))}
        {isViewerOpen && (
          <ImageViewer
            src={imgs}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
}
export default Gallery;
