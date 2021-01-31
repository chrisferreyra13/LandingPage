import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/*B<div className="o-letter-navbar-logo">O</div>ne{/*&nbsp; <i class="fas fa-feather-alt"/>*/}
            <img src='logo.svg'/>
        </Link>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hire'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hire
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/join'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                JOIN
              </Link>
            </li>
          </ul>
          {button && <Button linkTo="/join" buttonStyle='btn--outline'>JOIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
