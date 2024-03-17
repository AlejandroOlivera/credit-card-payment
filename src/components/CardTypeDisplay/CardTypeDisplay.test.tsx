import React from 'react';
import { render } from '@test-utils';

import { CardTypeDisplay } from './CardTypeDisplay'; // Adjust the import path as necessary

describe('CardTypeDisplay Component', () => {
  it('test_renders_all_card_images', () => {
    const { getByAltText } = render(
      <CardTypeDisplay cards={['visa', 'mastercard', 'amex']} />,
    );
    expect(getByAltText('visa')).toBeInTheDocument();
    expect(getByAltText('mastercard')).toBeInTheDocument();
    expect(getByAltText('amex')).toBeInTheDocument();
  });

  it('test_applies_unselected_class_to_non_selected_cards', () => {
    const { container } = render(
      <CardTypeDisplay
        cards={['visa', 'mastercard', 'amex']}
        selected="visa"
      />,
    );
    expect(
      container.querySelector('.card-img--unselected'),
    ).toBeInTheDocument();
    expect(container.querySelectorAll('.card-img--unselected').length).toBe(2);
  });

  it('test_does_not_apply_unselected_class_if_no_card_selected', () => {
    const { container } = render(
      <CardTypeDisplay cards={['visa', 'mastercard', 'amex']} />,
    );
    expect(
      container.querySelector('.card-img--unselected'),
    ).not.toBeInTheDocument();
  });
});
