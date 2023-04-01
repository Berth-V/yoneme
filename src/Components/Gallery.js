import {useState, useCallback} from 'react';
import ImageViewer from 'react-simple-image-viewer';

function Gallery() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index)=>{
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer=()=>{
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const imgs = [
      'Img/img1.jpg',
      'Img/img2.jpg',
      'Img/img3.jpg',
      'Img/img4.jpg',
      'Img/img5.jpg',
      'Img/img6.jpg',
      'Img/img7.jpg',
      'Img/img8.jpg',
      'Img/img9.jpg',
      'Img/img10.jpg',
      'Img/img11.jpg',
      'Img/img12.jpg',
      'Img/img13.jpg',
      'Img/img14.jpg',
      'Img/img15.jpg',
      'Img/img16.jpg'
      ];

  return (
    <div className='gallery'>
      <div className='gallery__box'>
        {imgs.map((imgs, index)=>(
          <div className='gallery__item'>
            <img 
            className='gallery__img'
            src={imgs}
            key={index}
            alt="yoneme galeria"
            onClick={()=>openImageViewer(index)}
          />
          </div>
          ))
        }
        {isViewerOpen && (
          <ImageViewer
            src={imgs}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}/>
          )
        }
      </div>
    </div>
  )
}
;

export default Gallery;
