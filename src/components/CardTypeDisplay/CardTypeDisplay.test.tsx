import React from 'react';
import { render, screen } from '@test-utils';

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

  test('test_renders_all_card_images', () => {
    render(<CardTypeDisplay cards={['visa', 'mastercard', 'amex']} />);
    expect(screen.getByTestId('visa')).toContainHTML('<img');
    expect(screen.getByTestId('mastercard')).toContainHTML('<img');
    expect(screen.getByTestId('amex')).toContainHTML('<img');
  });

  test('renders the correct number of cards', () => {
    render(<CardTypeDisplay cards={['visa', 'mastercard', 'amex']} />);
    expect(screen.getByTestId('visa')).toBeInTheDocument();
    expect(screen.getByTestId('mastercard')).toBeInTheDocument();
    expect(screen.getByTestId('amex')).toBeInTheDocument();
  });
});
