import Amex from '@/images/amex';
import classes from './CreditCard.module.css';
import { WText } from '../WText/WText';

export const CreditCard = () => {
  return (
    <section className={classes.creditCardContainer}>
      <img className={classes.creditCard} src="./creditcard3.png" />
      <div className={classes.brand}>{Amex}</div>
      <WText text="**** **** **** " styles={classes.cardNumber} />
      <div className={classes.cardHolder}>
        <WText text="Expiry Date" styles={classes.expiryDate} />
        <WText text="MM/YY" styles={classes.expiryNumber} />
      </div>
    </section>
  );
};
