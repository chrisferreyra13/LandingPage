import React from 'react';
import '../App.css';
import loadable from '@loadable/component';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const MiddleBlockHome = loadable(() => import('../components/MiddleBlockHome'));
const Cards = loadable(() => import('../components/Cards'));

function Home() {
  return (
    <>
      <HeroSection />
      <MiddleBlockHome/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
