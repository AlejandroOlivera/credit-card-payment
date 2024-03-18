import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@test-utils';

import { configureStore } from '@reduxjs/toolkit';

import productSlice from '../Product/productSlice';

import { Summary } from './Sumary';
import creditCardInfoSlice from '../CreditCardInfo/creditCardInfoSlice';

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

describe('Summary', () => {
  test('renders the summary and responds to buy button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Summary onActionChange={vi.fn()} handleActionChange={vi.fn()} />
      </Provider>,
    );

    const button = getByText('Buy');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
