import React from 'react';
import '../App.css';
import loadable from '@loadable/component';

import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import HireContent from '../content/HomeHire.json'
import ProblemsContent from '../content/HomeProblems.json'
import MiddleBlockHomeContent from '../content/MiddleBlockHomeContent'
import ExplorersMiddleBlock from '../content/HomeExplorersMiddleBlock.json'
import ExplorersRecruitment from '../content/HomeExplorersRecruitment.json'
import ExplorersMotivation from '../content/HomeExplorersMotivation.json'
import ProvocativeMiddleBlock from '../content/HomeProvocativeMiddleBlock.json'

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
      img={HireContent.img}
      left={true}
      title={HireContent.title}
      content={HireContent.content}
      />
      <ContentBlock
      img={ProblemsContent.img}
      left={false}
      title={ProblemsContent.title}
      content={ProblemsContent.content}
      />
      <MiddleBlock 
      title={ExplorersMiddleBlock.title}
      content={ExplorersMiddleBlock.content}
      />
      <ContentBlock
      img={ExplorersRecruitment.img}
      left={true}
      title={ExplorersRecruitment.title}
      content={ExplorersRecruitment.content}
      />
      <ContentBlock
      img={ExplorersMotivation.img}
      left={false}
      title={ExplorersMotivation.title}
      content={ExplorersMotivation.content}
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
