import Fprint from './Fprint';

function About() {
  return (
    <div className='about'>
      <h2 className='about__h2'>Sobre nosotros</h2>
      <div className='about__container'>
        <p className='about__txt'>
          Tratando de conservar el legado del taller de danza folcklórica de la
          Preparatoria Federal Lázaro Cárdenas, el profesor Fernando López
          Maldonado, toma el compromiso de dirigir el taller a partir del año
          2002.
          <br />
          Iniciando como Grupo Folclórico en 2010 y presentándose por primera
          vez con el nombre de Yoneme en febrero de 2012, en la ciudad de Las
          Vegas, Nevada. <br />
          Teniendo como objetivos, transmitir su arte por medio de la danza.
          Yoneme busca formar buenos bailarines, dándoles una oportunidad de
          escalonar el talento, el gusto por nuestra cultura y las ganas de
          compartir una gran pasión.
        </p>
        <hr className='hr1' />
        <div className='about__txt'>
          <h3 className='about__h3'>Horarios:</h3>
          <hr className='hr2' />
          <br />
          Viernes: 06:00p.m - 09:00p.m
          <br />
          <br />
          Sabado: 03:00p.m - 06:00p.m
        </div>
      </div>
      <Fprint />
    </div>
  );
}
export default About;
