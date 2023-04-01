import './App.css';
import { lazy , Suspense } from 'react';
import { useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ClickAwayListener } from '@mui/material';
const Home = lazy(() => import('./Components/Home'));
const Gif = lazy(() => import('./Components/Gif'));
const About = lazy(() => import('./Components/About'));
const Gallery = lazy(() => import('./Components/Gallery'));
const Contact = lazy(() => import('./Components/Contact'));

function App() { 
  const [isOpen, setIsOpen] = useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen)
  };
  const handleClickAway=()=>{
    setIsOpen(false)
  }
  const backgroundAnimation={
    starts:{opacity:1},
    ends:{
      opacity:0,
      transition:{
        duration:2.7,
        delay:.5
      },
      transitionEnd:{
        display:'none'
      }
    }
  }
  const logoContainerAn={
    starts:{
      height:'100vh',
      width:'100vw'
    },
    ends:{
      height:'var(--logo-cont-height)',
      width:'var(--logo-cont-width)',
      transition:{
        duration:2.7,
        delay:.5
      }
    }
  }
  const logoAnimation={
    starts:{
      height:'250px'
    },
    ends:{
      height:'var(--logo-nav-size)',
      transition:{
        duration:2,
        delay:.5
      }
    }
  }
  const toggleAnimation={
    open:{ 
      x:'20%'
    },
    closed:{
      x:'100%',
      transition:{
        type:'ease-in-out'
      }
    }
  }
  const bar1Animation={
    open:{
      rotate:'45deg',
      y:'4px'
    },
    closed:{transition:{duration:3}}
  }
  const bar2Animation={
    open:{display:'none'},
    closed:{display:'unset'}
  }
  const bar3Animation={
    open:{
      rotate:'-45deg',
      y:'-4px'},
    closed:{transition:{duration:3}}
  }
  
  
  return (
  <>
  <Suspense fallback={<h1>Cargando...</h1>}>
    <header className='header'>
      <motion.div className='open__animation'
      variants={backgroundAnimation}
      initial={'starts'}
      animate={'ends'}>
      </motion.div>
        <motion.nav className='nav'>     
          <motion.div className='logo__container'
          variants={logoContainerAn}
          initial='starts'
          animate='ends'>
            <motion.img className='logo'
            src='Img/logo2.png'
            variants={logoAnimation}
            initial={'starts'}
            animate={'ends'}/>
            </motion.div>
            <div className='nav__content'>
              <Link className='nav__item'
              activeClass='active' 
              smooth spy to='home'
              >
                Inicio
              </Link>
              <Link className='nav__item' 
              activeClass='active' 
              smooth spy to='about'
              >
                Sobre nosotros
              </Link>
              <Link className='nav__item' 
              activeClass='active' 
              smooth spy to='gallery'
              >
                Galeria
              </Link>
              <Link className='nav__item' 
              activeClass='active' 
              smooth spy to='contact'
              >
                Contacto
              </Link>
          </div>
         
          <ClickAwayListener onClickAway={handleClickAway}>

            <motion.div className='togglemenu__btn'
             onClick={handleClick}>
              <motion.img className='togglebar'
              
              src='Img/Line.svg'
              variants={bar1Animation}
              animate={isOpen ? 'open' : 'closed'}/>
              <motion.img className='togglebar'
              
               src='Img/Line.svg'
               variants={bar2Animation}
               animate={isOpen ? 'open' : 'closed'}/>
              <motion.img className='togglebar'
              
              src='Img/Line.svg'
              variants={bar3Animation}
              animate={isOpen ? 'open' : 'closed'}/>
            </motion.div>  
          </ClickAwayListener>
          
          <motion.div className='togglemenu__container'
          variants={toggleAnimation}
          animate={isOpen ? 'open' : 'closed'}>
            <div className='toggle__box'>
              <Link className='toggle__item' 
                activeClass='active' 
                smooth spy to='home'>
                Inicio
              </Link>
              <Link className='toggle__item' 
              activeClass='active' 
              smooth spy to='about'>
                Sobre nosotros
              </Link>
              <Link className='toggle__item' 
              activeClass='active' 
              smooth spy to='gallery'>
                Galeria
              </Link>
              <Link className='toggle__item' 
              activeClass='active' 
              smooth spy to='contact'>
                Contacto
              </Link>
            </div>
          </motion.div> 
          
        </motion.nav>
    </header>
    <Home id='home'/>
    {/* Background fader section */}
    <div className='background__fader'>
      <Gif/>
      <About id='about'/>
      <Gallery id='gallery'/>
      <Contact id='contact'/>
    </div>
    <footer className='footer'>
      Copyright © BertDev 2023
    </footer>
  </Suspense>
  
  </>
  );
}

export default App;
