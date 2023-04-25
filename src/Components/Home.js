import fondo1 from '../PreloadsImgs/portada6.1.avif';
import { motion } from 'framer-motion';

function  Home()  {
  return (
  <>
    <motion.div className='home'
      initial={{
        background: `url(${fondo1}) no-repeat center/var(--home-back-size)`
        }}
    >
      <div className='txt__container'>
        <p className='txt'>
          Forma parte de la familia Yoneme, comprometido en difundir 
          el folcklor nacional e internacional de una manera digna y responsable. <br/>
          Aquí nuestro esfuerzo es recompensado.<br/>
          Ven y conócenos.<br/>
        </p>
      </div>
    </motion.div>
  </>
  )
};

export default Home;