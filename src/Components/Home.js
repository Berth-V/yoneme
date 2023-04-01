
import fondo1 from '../PreloadsImgs/portada6.1.jpg';

function  Home()  {
  return (
  <>
    <div className='preloadBackgrounds'>
      <img src={fondo1}/>
    </div>
    <div className='home'>
      <div className='txt__container'>
        <p className='txt'>
          Forma parte de la familia Yoneme, comprometido en difundir el folcklor nacional e internacional de una manera digna y responsable. <br/>
          Aquí nuestro esfuerzo es recompensado.<br/>
          Ven y conócenos.<br/>
        </p>
      </div>
    </div>
  </>
  )
};

export default Home;