import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render } from '@test-utils';

import creditCardInfoSlice from '@/sections/CreditCardInfo/creditCardInfoSlice';
import { ExpiryDateInput } from './ExpiryDateInput';

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

describe('ExpiryDateInput', () => {
  test('renders the input and responds to change event', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <ExpiryDateInput />
      </Provider>,
    );

    const input: any = getByPlaceholderText('MM/YY');
    fireEvent.change(input, { target: { value: '12/24' } });
    expect(input.value).toBe('12/24');
  });

  test('sets error message for invalid expiry date', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <ExpiryDateInput />
      </Provider>,
    );

    const input = getByPlaceholderText('MM/YY');
    fireEvent.change(input, { target: { value: '13/24' } });
    const errorMessage = getByText('Fecha de vencimiento no válida');
    expect(errorMessage).toBeInTheDocument();
  });
});
