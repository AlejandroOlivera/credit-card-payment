import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';

import { WInput } from '../WInput/WInput';
import { CardTypeDisplay } from '../CardTypeDisplay/CardTypeDisplay';
import classes from './NumberCardInput.module.css';
import {
  setCardNumber,
  setCardType,
} from '@/sections/CreditCardInfo/creditCardInfoSlice';
import { RootState } from '@/store/store';

/**
 * The `NumberCardInput` component in TypeScript React manages input for a credit card number,
 * determines the card type based on the number input, and displays the card type alongside the input
 * field.
 * @returns The `NumberCardInput` component is being returned. It consists of a form group containing a
 * `WInput` component for entering a credit card number and a `CardTypeDisplay` component for
 * displaying the type of credit card (Visa, Mastercard, Amex) based on the input provided. The
 * `handleChange` function is responsible for handling changes in the input field and formatting the
 * credit card
 */
export const NumberCardInput = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const { cardNumber, cardType } = useSelector(
    (state: RootState) => state.creditCard,
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value } = e.target;

      value = value.replace(/\D/g, '');

      if (value === '') {
        dispatch(setCardType(''));
        dispatch(setCardNumber(''));
        setErrorMessage('');
        return;
      }

      if (!/^3[47]/.test(value)) {
        value = value.slice(0, 16);
      }

      if (value.length <= 4) {
        dispatch(setCardNumber(value));
      } else {
        if (/^4/.test(value)) {
          dispatch(setCardType('visa'));
        } else if (/^5[1-5]/.test(value)) {
          dispatch(setCardType('mastercard'));
        } else if (/^3[47]/.test(value)) {
          dispatch(setCardType('amex'));
        } else {
          setErrorMessage('Invalid card number');
        }

        if (cardType === 'amex') {
          value = value.replace(/^(\d{4})(\d{6})(\d{5})$/, '$1 $2 $3');
        } else {
          value = value.replace(/(\d{4})/g, '$1 ').trim();
        }

        dispatch(setCardNumber(value));
      }
    },
    [cardType],
  );

  return (
    <div className={classes.formGroup}>
      <WInput
        inputLabel="Card number"
        onChange={handleChange}
        type="text"
        value={cardNumber}
        placeholder="Credit card number"
        errorMessage={errorMessage}
      />
      <CardTypeDisplay
        selected={cardType}
        cards={['visa', 'mastercard', 'amex']}
      />
    </div>
  );
};
