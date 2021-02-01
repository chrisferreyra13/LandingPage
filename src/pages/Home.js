import React from 'react';
import '../App.css';
import loadable from '@loadable/component';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import ExpAProjects from '../content/home/HomeExpAProjects.json'
import ExpAProblemsContent from '../content/home/HomeExpAProblems.js'
import ExpAProblems from '../content/home/HomeExpAProblems.json'
import MiddleBlockHomeContent from '../content/home/MiddleBlockHomeContent'
import ExpAMiddleBlock from '../content/home/HomeExpAMiddleBlock.json'
import ExpARecruitment from '../content/home/HomeExpARecruitment.json'
import ExpAMotivation from '../content/home/HomeExpAMotivation.json'
import ProvocativeMiddleBlock from '../content/home/HomeProvocativeMiddleBlock.json'

const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const Cards = loadable(() => import('../components/Cards'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));

const Home = () => {
  return (
    <>
      <HeroSection />
      <MiddleBlock 
      title={"Who We Are"}
      content={MiddleBlockHomeContent}
      />
      <Cards />
      <ContentBlock
      img={ExpAProjects.img}
      left={true}
      title={ExpAProjects.title}
      content={ExpAProjects.content}
      />
      <ContentBlock
      img={ExpAProblems.img}
      left={false}
      title={ExpAProblems.title}
      content={ExpAProblemsContent}
      />
      <MiddleBlock 
      title={ExpAMiddleBlock.title}
      content={ExpAMiddleBlock.content}
      />
      <ContentBlock
      img={ExpARecruitment.img}
      left={true}
      title={ExpARecruitment.title}
      content={ExpARecruitment.content}
      />
      <ContentBlock
      img={ExpAMotivation.img}
      left={false}
      title={ExpAMotivation.title}
      content={ExpAMotivation.content}
      />
      <MiddleBlock 
      title={ProvocativeMiddleBlock.title}
      content={ProvocativeMiddleBlock.content}
      />
      <Footer />
    </>
  );
}

export default Home;
