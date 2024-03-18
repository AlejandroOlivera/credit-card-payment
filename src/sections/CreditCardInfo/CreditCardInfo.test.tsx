import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@test-utils';

import { MantineProvider } from '@mantine/core';
import { configureStore } from '@reduxjs/toolkit';

import productSlice from '../Product/productSlice';
import creditCardInfoSlice from './creditCardInfoSlice';
import { CreditCardInfo } from './CreditCardInfo';

const store = configureStore({
  reducer: {
    creditCard: creditCardInfoSlice,
    product: productSlice,
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
    product: {
      name: 'Test Product',
      price: 100,
      id: 1,
      showModal: true,
    },
  },
});

describe('CreditCardInfo', () => {
  test('renders the modal and responds to add credit card button click', () => {
    const { getByText } = render(
      <MantineProvider>
        <Provider store={store}>
          <CreditCardInfo onActionChange={vi.fn()} />
        </Provider>
      </MantineProvider>,
    );

    const button = getByText('Add Credit card');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
