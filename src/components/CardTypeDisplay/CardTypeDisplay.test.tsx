import React from 'react';
import { render } from '@test-utils';

import { CardTypeDisplay } from './CardTypeDisplay'; // Adjust the import path as necessary

describe('CardTypeDisplay Component', () => {
  test('renders card images correctly', () => {
    const { getByTestId } = render(
      <CardTypeDisplay cards={['visa', 'mastercard', 'amex']} />,
    );

    const mastercardSvg = getByTestId('mastercard');
    const amexSvg = getByTestId('amex');

    expect(mastercardSvg).toBeInTheDocument();
    expect(amexSvg).toBeInTheDocument();
  });
});
