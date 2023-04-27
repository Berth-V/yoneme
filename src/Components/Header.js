import {useState} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {ClickAwayListener} from '@mui/material';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };
  // Framer Motion Variables //
  const backgroundAnimation = {
    starts: {opacity: 1},
    ends: {
      opacity: 0,
      transition: {
        duration: 2.7,
        delay: 0.5,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };
  const logoContainerAnimation = {
    starts: {
      display: 'flex',
      height: '100vh',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ends: {
      height: 'var(--logo-cont-height)',
      width: 'var(--logo-cont-width)',
      transition: {
        duration: 2.7,
        delay: 0.5,
      },
    },
  };
  const logoAnimation = {
    starts: {height: '250px'},
    ends: {
      height: 'var(--logo-nav-size)',
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };
  const toggleAnimation = {
    open: {right: 0},
    closed: {right: -400},
  };
  const bar1Animation = {
    open: {
      rotate: '45deg',
      y: '4px',
    },
    closed: {transition: {duration: 3}},
  };
  const bar2Animation = {
    open: {display: 'none'},
    closed: {display: 'unset'},
  };
  const bar3Animation = {
    open: {
      rotate: '-45deg',
      y: '-4px',
    },
    closed: {transition: {duration: 3}},
  };
  return (
    <>
      <header className='header'>
        <motion.div
          className='open__animation'
          variants={backgroundAnimation}
          initial={'starts'}
          animate={'ends'}
        ></motion.div>
        <motion.div
          className='logo__container'
          layout
          variants={logoContainerAnimation}
          initial='starts'
          animate='ends'
        >
          <motion.img
            className='logo'
            src='Img/logo2.avif'
            alt='yoneme logo'
            variants={logoAnimation}
            initial={'starts'}
            animate={'ends'}
          />
        </motion.div>
        <nav className='nav'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <motion.div className='togglemenu__btn' onClick={handleClick}>
              <motion.img
                className='togglebar'
                src='Img/Line.svg'
                variants={bar1Animation}
                animate={isOpen ? 'open' : 'closed'}
              />
              <motion.img
                className='togglebar'
                src='Img/Line.svg'
                variants={bar2Animation}
                animate={isOpen ? 'open' : 'closed'}
              />
              <motion.img
                className='togglebar'
                src='Img/Line.svg'
                variants={bar3Animation}
                animate={isOpen ? 'open' : 'closed'}
              />
            </motion.div>
          </ClickAwayListener>
          <motion.div
            className='nav__content'
            variants={toggleAnimation}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link
              className='nav__item'
              activeClass='active'
              smooth
              spy
              to='home'
            >
              Inicio
            </Link>
            <Link
              className='nav__item'
              activeClass='active'
              smooth
              spy
              to='about'
            >
              Sobre nosotros
            </Link>
            <Link
              className='nav__item'
              activeClass='active'
              smooth
              spy
              to='gallery'
            >
              Galeria
            </Link>
            <Link
              className='nav__item'
              activeClass='active'
              smooth
              spy
              to='contact'
            >
              Contacto
            </Link>
          </motion.div>
        </nav>
      </header>
    </>
  );
}

export default Header;
