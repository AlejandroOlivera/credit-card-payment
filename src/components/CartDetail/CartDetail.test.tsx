import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@test-utils';

import { configureStore } from '@reduxjs/toolkit';

import productSlice from '@/sections/Product/productSlice';
import { CartDetail } from './CartDetail';

describe('CartDetail', () => {
  test('renders the product details correctly', () => {
    const store = configureStore({
      reducer: {
        product: productSlice,
      },
      preloadedState: {
        product: {
          name: 'Test Product',
          price: 100,
          id: 1,
          showModal: false,
        },
      },
    });

    render(
      <Provider store={store}>
        <CartDetail />
      </Provider>,
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('HeadPhone')).toBeInTheDocument();
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Shipping & Handing')).toBeInTheDocument();
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Tax')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$110')).toBeInTheDocument();
  });
});
