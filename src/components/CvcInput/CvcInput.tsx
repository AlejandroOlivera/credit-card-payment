import { useDispatch, useSelector } from 'react-redux';
import { WInput } from '../WInput/WInput';
import { RootState } from '@/store/store';
import { setCvc } from '@/sections/CreditCardInfo/creditCardInfoSlice';

export const CvcInput = () => {
  const dispatch = useDispatch();
  const cvc = useSelector((state: RootState) => state.creditCard.cvc);

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    value = value.replace(/\D/g, '');

    value = value.slice(0, 3);

    dispatch(setCvc(value));
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
