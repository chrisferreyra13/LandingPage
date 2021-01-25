import React from 'react';
import { withTranslation } from 'react-i18next';
import '../styles/Cards.css';
import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h6>What are you looking for?</h6>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Become an Explorer of the Alternative'
              path='/join'
            />
            <CardItem
              src='images/hire_team_2.jpg'
              text='Hire our people'
              path='/hire'
            />
            <CardItem
              src='images/problem.jpg'
              text='Trust us your problem'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Cards);
