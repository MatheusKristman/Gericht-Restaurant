import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='Logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt='concha' className='spoon__img' style={{ marginTop: '15px' }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
    </div>

    <div className='footer-line' />

    <div className='dev-section'>
      <div className='dev-wrapper'>
        <a href='https://portfolio-2-0-iota-henna.vercel.app/' target='_blank' rel='noreferrer noopener' className='dev-logo'>
        <svg width="109" height="45" viewBox="0 0 109 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="105" height="41" stroke="currentColor" strokeWidth="4" />
          <path
            d="M12.4922 8.5625H16.1445L25.4609 31.7461L34.7578 8.5625H38.4297L26.8672 37H24.0156L12.4922 8.5625ZM11.3008 8.5625H14.5234L15.0508 25.9062V37H11.3008V8.5625ZM36.3789 8.5625H39.6016V37H35.8516V25.9062L36.3789 8.5625ZM49.9922 8.5625V37H46.2227V8.5625H49.9922ZM67.1602 8.5625L55.3438 21.8242L48.7031 28.7188L48.0781 24.6953L53.0781 19.1875L62.6289 8.5625H67.1602ZM63.5273 37L53 23.1328L55.2461 20.1445L68.0195 37H63.5273Z"
            fill="currentColor" />
          <rect x="70" y="33" width="27" height="4" fill="currentColor" />
        </svg>
        </a>

        <ul className='dev-socials'>
          <li>
            <a href='https://www.linkedin.com/in/matheus-kristman/' target='_blank' rel='noreferrer noopener'>
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/tinzin.exe/' target='_blank' rel='noreferrer noopener'>
              <FiInstagram />
            </a>
          </li>
          <li>
            <a href='https://github.com/MatheusKristman' target='_blank' rel='noreferrer noopener'>
              <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
