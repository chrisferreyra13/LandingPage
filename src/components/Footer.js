import React from 'react';
import '../styles/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-us'>Vision</Link>
            <Link to='/about-us'>Mision</Link>
            <Link to='/'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Explorers</h2>
            <Link to='/'>Who they are</Link>
            <Link to='/'>Mision</Link>
            <Link to='/'>Principles</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Connect</h2>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              B-
              <div className="o-letter-social-logo">O</div>
              ne
              {/*<i class='fab fa-typo3' />*/}
            </Link>
          </div>
          <small class='website-rights'>B-One © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
