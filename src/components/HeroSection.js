import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EXPLORE THE ALTERNATIVE</h1>
      <p>The <b className="bold-color">Explorers</b> of the <b className="bold-color">Alternative</b> are the most disruptive and energize people,</p>
      <p>who works for challenging projects.</p>
     
      <div className='hero-btns'>
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
          HIRE EXPLORERS {/*<i className='far fa-play-circle' />*/}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
