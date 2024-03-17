import { useState } from 'react';
import { WInput } from '../WInput/WInput';

const getCurrentYearLastDigits = () => {
  const currentYear = new Date().getFullYear();
  return currentYear.toString().slice(2);
};

export const ExpiryDateInput = () => {
  const [date, setDate] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }

    const currentYearDigits = getCurrentYearLastDigits();
    const currentYearDigitsInput = value.slice(3, 5);

    if (
      parseInt(currentYearDigitsInput, 10) < parseInt(currentYearDigits, 10)
    ) {
      value = `${value.slice(0, 3)}${currentYearDigits}`;
    }

    setDate(value);
  };

  return (
    <WInput
      value={date}
      width={50}
      inputLabel="Expiry date"
      type="text"
      placeholder="MM/YY"
      onChange={(e) => handleInputChange(e)}
    />
  );
};
