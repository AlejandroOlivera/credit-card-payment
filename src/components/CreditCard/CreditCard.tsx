import { useSelector } from 'react-redux';
import Amex from '@/images/amex';
import mastercard from '@/images/mastercard';
import visa from '@/images/visa';
import classes from './CreditCard.module.css';
import { WText } from '../WText/WText';
import { RootState } from '@/store/store';

export const CreditCard = () => {
  const renderBrand = (brand: string) => {
    switch (brand) {
      case 'visa':
        return visa;
      case 'mastercard':
        return mastercard;
      case 'amex':
        return Amex;
      default:
        return null;
    }
  };

  const creditCard = useSelector((state: RootState) => state.creditCard);

  return (
    <section className={classes.creditCardContainer}>
      <img
        className={classes.creditCard}
        src="./creditcard3.png"
        alt="miniheadphone"
      />
      <div className={classes.brand}>{renderBrand(creditCard.cardType)}</div>
      <WText
        text={`**** **** **** ${creditCard.cardNumber.substring(12)}`}
        styles={classes.cardNumber}
      />
      <div className={classes.cardHolder}>
        <WText text="Expiry Date" styles={classes.expiryDate} />
        <WText text={creditCard.expiryDate} styles={classes.expiryNumber} />
      </div>
    </section>
  );
};
