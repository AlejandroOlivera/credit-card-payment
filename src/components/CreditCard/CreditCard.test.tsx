import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { CreditCard } from './CreditCard';

import creditCardSlice from '@/sections/CreditCardInfo/creditCardInfoSlice';

const store = configureStore({
  reducer: {
    creditCard: creditCardSlice,
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
describe('CreditCard', () => {
  test('renders the credit card details correctly', () => {
    render(
      <MantineProvider>
        <Provider store={store}>
          <CreditCard />
        </Provider>
      </MantineProvider>,
    );

    expect(screen.getByText('**** **** **** 56')).toBeInTheDocument();
    expect(screen.getByText('Expiry Date')).toBeInTheDocument();
    expect(screen.getByText('01/23')).toBeInTheDocument();
  });
});
