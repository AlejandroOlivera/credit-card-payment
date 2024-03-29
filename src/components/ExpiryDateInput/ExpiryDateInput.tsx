import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WInput } from '../WInput/WInput';
import { RootState } from '@/store/store';
import {
  setExpiryDate,
  setExpiryDateIsValid,
} from '@/sections/CreditCardInfo/creditCardInfoSlice';

const INVALID_EXPIRY_DATE_ERROR = 'Fecha de vencimiento no válida';

export const ExpiryDateInput = () => {
  const dispatch = useDispatch();
  const expiryDate = useSelector(
    (state: RootState) => state.creditCard.expiryDate,
  );
  const [errorMessage, setErrorMessage] = useState('');

  const getCurrentDateDetails = () => {
    const currentDate = new Date();
    return {
      currentMonth: currentDate.getMonth() + 1,
      currentYear: currentDate.getFullYear(),
    };
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value: inputValue } = e.target;

      if (inputValue.length === 2 && expiryDate.length === 1) {
        inputValue += '/';
      }

      if (expiryDate.length === 3 && inputValue.length === 1) {
        inputValue = inputValue.slice(0, 1);
      }

      if (inputValue.length > 5) {
        inputValue = inputValue.slice(0, 5);
      }

      const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
      const isValidExpiryDate = expiryDateRegex.test(inputValue);

      if (isValidExpiryDate && inputValue.length === 5) {
        const inputMonth = parseInt(inputValue.substring(0, 2), 10);
        const inputYear = parseInt(`20${inputValue.substring(3)}`, 10);

        const { currentMonth, currentYear } = getCurrentDateDetails();

        if (
          inputYear < currentYear ||
          (inputYear === currentYear && inputMonth < currentMonth)
        ) {
          dispatch(setExpiryDateIsValid(false));
          setErrorMessage('La fecha de vencimiento está en el pasado');
        } else {
          dispatch(setExpiryDateIsValid(true));

          setErrorMessage('');
        }
      } else if (!isValidExpiryDate && inputValue.length === 5) {
        dispatch(setExpiryDateIsValid(false));
        setErrorMessage(INVALID_EXPIRY_DATE_ERROR);
      } else {
        dispatch(setExpiryDateIsValid(true));
        setErrorMessage('');
      }

      dispatch(setExpiryDate(inputValue));
    },

    [expiryDate],
  );

  return (
    <WInput
      value={expiryDate}
      width={50}
      inputLabel="Expiry date"
      type="text"
      placeholder="MM/YY"
      errorMessage={errorMessage}
      onChange={handleInputChange}
    />
  );
};
