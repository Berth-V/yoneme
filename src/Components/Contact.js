import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__box'>
        <h2 className='contact__h2'>Contacto</h2>
        <div className='contact__iconContainer'>
          <a className='contact__a'
          href='https://www.facebook.com/yoneme.pflc' 
          target='_blank' 
          rel="noreferrer" 
          >
            <FontAwesomeIcon className='contact__icon' 
            icon={faSquareFacebook}
            />
            <span className='contact__txt'>
              Agreganos
            </span>
          </a>
            <hr className='contact__separator'/>
            <a className='contact__a' 
            href='https://www.instagram.com/yonemepflc/' 
            target='_blank' 
            rel="noreferrer"
            >
              <FontAwesomeIcon className='contact__icon'
              icon={faInstagram}
              />
              <span className='contact__txt'>
                Siguenos
              </span>
            </a>
            <hr className='contact__separator'/>
            <a className='contact__a'
             href='mailto:yonemedanza@gmail.com' 
             target='_blank' 
             rel="noreferrer"
            >
              <FontAwesomeIcon  className='contact__icon' 
              icon={faEnvelope}
              />
              <span className='contact__txt'>
                Envianos un correo
              </span>
            </a>
        </div>
      </div>
    </div>
  )
};

export default Contact;
