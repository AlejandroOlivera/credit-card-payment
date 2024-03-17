import { useState } from 'react';
import { WInput } from '../WInput/WInput';

export const CvcInput = () => {
  const [cvc, setCvc] = useState('');

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    value = value.replace(/\D/g, '');

    value = value.slice(0, 3);

    setCvc(value);
  };

  return (
    <WInput
      inputLabel="CVC"
      type="number"
      placeholder="CVC"
      value={cvc}
      onChange={handleCvcChange}
    />
  );
};
