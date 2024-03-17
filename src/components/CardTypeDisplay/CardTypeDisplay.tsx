import React from 'react';
import amexImg from '../../images/amex';
import mastercardImg from '../../images/mastercard';
import visaImg from '../../images/visa';

import classes from './CardTypeDisplay.module.css';

type Card = 'visa' | 'mastercard' | 'amex';

const cardsImages = {
  amex: amexImg,
  mastercard: mastercardImg,
  visa: visaImg,
};

interface CardTypeDisplayProps {
  cards: Card[];
  selected?: string;
}

export const CardTypeDisplay: React.FC<CardTypeDisplayProps> = ({
  cards,
  selected,
}) => (
  <div className={classes.cardTypeDisplay}>
    {cards.map((card) => (
      <div
        id={`${classes.cardImg} ${
          selected && card !== selected ? classes.cardImgUnselected : ''
        }`}
        className={`${classes.cardImg} ${
          selected && card !== selected ? classes.cardImgUnselected : ''
        }`}
        key={card}
        data-testid={card}
      >
        {cardsImages[card]}
      </div>
    ))}
  </div>
);
