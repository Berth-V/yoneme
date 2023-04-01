import {motion} from 'framer-motion';

const printsAnimate={
  starts:{opacity:0},
  ends:{
    opacity:1,
    transition:{
      repeat:1,
      repeatType:'reverse',
      duration:2
    }
  }
}

function Fprint(){
  const imgs = [
    {id : 1, class : 'fPrint', src: './Img/huella.png'},
    {id : 2, class : 'fPrint', src: './Img/huella.png'},
    {id : 3, class : 'fPrint', src: './Img/huella.png'},
    {id : 4, class : 'fPrint', src: './Img/huella.png'},
    {id : 5, class : 'fPrint', src: './Img/huella.png'},
    {id : 6, class : 'fPrint', src: './Img/huella.png'},
    {id : 7, class : 'fPrint', src: './Img/huella.png'},
    {id : 8, class : 'fPrint', src: './Img/huella.png'},
    {id : 9, class : 'fPrint', src: './Img/huella.png'},
    {id : 10, class : 'fPrint', src: './Img/huella.png'},
    {id : 11, class : 'fPrint', src: './Img/huella.png'},
    {id : 12, class : 'fPrint', src: './Img/huella.png'},
    {id : 13, class : 'fPrint', src: './Img/huella.png'},
    {id : 14, class : 'fPrint', src: './Img/huella.png'},
    {id : 15, class : 'fPrint', src: './Img/huella.png'},
    {id : 16, class : 'fPrint', src: './Img/huella.png'},
    {id : 17, class : 'fPrint', src: './Img/huella.png'},
    {id : 18, class : 'fPrint', src: './Img/huella.png'},
    {id : 19, class : 'fPrint', src: './Img/huella.png'},
    {id : 20, class : 'fPrint', src: './Img/huella.png'},
    {id : 21, class : 'fPrint', src: './Img/huella.png'},
    {id : 22, class : 'fPrint', src: './Img/huella.png'},
    {id : 23, class : 'fPrint', src: './Img/huella.png'},
    {id : 24, class : 'fPrint', src: './Img/huella.png'},
    {id : 25, class : 'fPrint', src: './Img/huella.png'},
  ];
    return (
      <div className='component__fPrint'>
        <motion.div className='fPrint__box'
          initial={"starts"}
          transition={{staggerChildren: 0.5}}
          whileInView={"ends"}
          viewport={{once: true}}>
          {imgs.map((img) => (
            <motion.img className={img.class + img.id}
              src={img.src}
              key={img.id}
              variants={printsAnimate}  
            />
            ))
          }
        </motion.div>
        <motion.div
          className='fPrint__box'
          initial={"starts"}
          transition={{
            staggerChildren: 0.5,
          }}
          whileInView={"ends"}
          viewport={{ once: true }}
        >
          {imgs.map((img) => (
            <motion.img
              src={img.src}
              key={img.id}
              className={img.class + img.id}
              variants={printsAnimate} 
            />
            ))
          }
        </motion.div>
      </div>
  )
}

export default Fprint;