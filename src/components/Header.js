import React from 'react';
import '../App.css';
import '../styles/Header.css';

import { Button } from './Button';

const Header = ({img, activateButton=false, buttonText, title, content}) => {
  return (
    <div className='header-container'>
        <img src={img}/>
        <h2>{title}</h2>
        {content}
        {activateButton ? 
        <div className='header-btns'>
          <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              linkTo="/join"
            >
              {buttonText}
          </Button>
        </div> :
        null
        }
    </div>
  );
}

export default Header;
