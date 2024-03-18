import { Provider } from 'react-redux';
import { fireEvent, render } from '@test-utils';
import { configureStore } from '@reduxjs/toolkit';

import { NameCreditCard } from './NameCreditCard';
import creditCardInfoSlice from '@/sections/CreditCardInfo/creditCardInfoSlice';

describe('NameCreditCard', () => {
  test('renders the input and responds to change event', () => {
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

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <NameCreditCard />
      </Provider>,
    );

    const input: any = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(input.value).toBe('John Doe');
  });
});
