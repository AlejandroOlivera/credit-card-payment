import { useDispatch, useSelector } from 'react-redux';

import { WInput } from '../WInput/WInput';
import { RootState } from '@/store/store';
import { setName } from '@/sections/CreditCardInfo/creditCardInfoSlice';

export const NameCreditCard = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.creditCard.name);

  return (
    <WInput
      inputLabel="Name"
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => dispatch(setName(e.target.value))}
    />
  );
};
