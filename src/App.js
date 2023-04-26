import './App.css';
import {lazy, Suspense} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
const Home = lazy(() => import('./Components/Home'));
const Gif = lazy(() => import('./Components/Gif'));
const About = lazy(() => import('./Components/About'));
const Gallery = lazy(() => import('./Components/Gallery'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Header />
        <Home id='home' />
        {/* Background fader section */}
        <div className='background__fader'>
          <Gif />
          <About id='about' />
          <Gallery id='gallery' />
          <Contact id='contact' />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
