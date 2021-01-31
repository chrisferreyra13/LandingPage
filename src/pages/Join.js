import React from 'react';
import '../App.css';

import loadable from '@loadable/component';

import Footer from '../components/Footer';

import JoinHeaderContent from '../content/JoinHeaderContent'
import Principles from '../content/Principles.json';
import Beneficios from '../content/Services.json';
import Mision from '../content/AboutUsMisionMiddleBlock.json'
import CycleOfSustainability from '../content/CycleOfSustainability.json'

const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const Join = () => {
  return (
    <>
      <Header
      activateButton={true}
      buttonText={"BECOME A ExpA"}
      img={'/images/expa-2.jpg'}
      title={"IMPACT"}
      content={JoinHeaderContent}
      />
      <Features
      title={"Principles"}
      data={Principles.Features}
      />
      <ContentBlock
      left={false}
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
      <Features
      title={"We Are Your Vehicle"}
      data={Principles.Features}
      />
      <ContentBlock
      left={true}
      img={CycleOfSustainability.img}
      title={CycleOfSustainability.title}
      content={CycleOfSustainability.content}
      />
      <ContentBlock
      left={false}
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

export default Join;