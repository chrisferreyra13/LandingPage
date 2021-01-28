import React from 'react';
import '../App.css';

import loadable from '@loadable/component';

import Principles from '../content/Principles.json';
import Mision from '../content/AboutUsMisionMiddleBlock.json'

const Header = loadable(() => import('../components/HeaderAboutUs'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));

const AboutUs = () => {
  return (
    <>
      <Header/>
      <MiddleBlock
      title={Mision.title}
      content={Mision.content}
      />
      <ContentBlock/>
      <Features data={Principles.Features}/>
    </>
  );
}

export default AboutUs;