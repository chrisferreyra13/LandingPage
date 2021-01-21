import React from 'react';
import '../App.css';
import loadable from '@loadable/component';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import MiddleBlockContent from '../content/MiddleBlockContent.json';

const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const Cards = loadable(() => import('../components/Cards'));

function Home() {
  return (
    <>
      <HeroSection />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
