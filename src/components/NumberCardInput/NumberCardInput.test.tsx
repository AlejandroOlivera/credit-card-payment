import { Provider } from 'react-redux';
import { fireEvent, render } from '@test-utils';
import { configureStore } from '@reduxjs/toolkit';

import creditCardInfoSlice from '@/sections/CreditCardInfo/creditCardInfoSlice';
import { NumberCardInput } from './NumberCardInput';

const store = configureStore({
  reducer: {
    creditCard: creditCardInfoSlice,
  },
  preloadedState: {
    creditCard: {
      cardType: 'visa',
      cardNumber: '1234567890123456',
      expiryDate: '01/23',
      cvc: '123',
      expiryDateIsValid: true,
      name: 'Alejandro',
    },
  },
});
describe('NumbercardInput', () => {
  test('renders the input and responds to change event', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <NumberCardInput />
      </Provider>,
    );

    const input: any = getByPlaceholderText('Credit card number');
    fireEvent.change(input, { target: { value: '4111111111111111' } });
    expect(input.value).toBe('4111 1111 1111 1111');
  });
});
