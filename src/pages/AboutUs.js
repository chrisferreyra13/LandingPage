import React from 'react';
//import { Route } from 'react-router-dom';
import '../App.css';

import loadable from '@loadable/component';

import Footer from '../components/Footer';

import AboutUsHeaderContent from '../content/AboutUsHeaderContent'
import Principles from '../content/Principles.json';
import Beneficios from '../content/Services.json';
import Mision from '../content/AboutUsMisionMiddleBlock.json'
import CycleOfSustainability from '../content/CycleOfSustainability.json'

const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const AboutUs = () => {
  return (
    <>
      <Header
      img={'/images/sunrise-5.jpg'}
      title={"VISION"}
      content={AboutUsHeaderContent}
      />
      <MiddleBlock
      title={Mision.title}
      content={Mision.content}
      />
      <ContentBlock
      left={false}
      img={CycleOfSustainability.img}
      title={CycleOfSustainability.title}
      content={CycleOfSustainability.content}
      />
      <Features
      title={"Principles"}
      data={Principles.Features}
      />
      <ContentBlock
      left={true}
      img={CycleOfSustainability.img}
      title={CycleOfSustainability.title}
      content={CycleOfSustainability.content}
      />
      <Services
      title={"Beneficios"}
      data={Beneficios.Services}
      />
      <ContentBlock
      left={true}
      img={CycleOfSustainability.img}
      title={CycleOfSustainability.title}
      content={CycleOfSustainability.content}
      />
      <MiddleBlock
      title={Mision.title}
      content={Mision.content}
      />
      <Footer />
    </>
  );
}

export default AboutUs;