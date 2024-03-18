import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render } from '@test-utils';
import { CvcInput } from './CvcInput';
import creditCardInfoSlice from '@/sections/CreditCardInfo/creditCardInfoSlice';

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
describe('CvcInput', () => {
  test('renders the input and responds to change event', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <CvcInput />
      </Provider>,
    );

    const input: any = getByPlaceholderText('CVC');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});
