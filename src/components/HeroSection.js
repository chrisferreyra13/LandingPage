import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styles/Header.css';

function HeroSection() {
  return (
    <div className='header-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EXPLORE THE ALTERNATIVE</h1>
      <p className="header-container-text">The <b className="bold-color">Explorers</b> of the <b className="bold-color">Alternative</b> are the most disruptive and energize people, who works for challenging projects.</p>

      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo="/join"
        >
          BE DISRUPTIVE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          linkTo="/hire"
        >
          HIRE ExpA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
